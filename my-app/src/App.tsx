import Home from "./pages/Home";
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useEffect, useRef } from "react";

function App() {
  const intervalRef = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const createBrandingOverlay = (iframe: HTMLIFrameElement) => {
    if (!overlayRef.current) {
      const overlay = document.createElement("div");
      overlay.id = "tawk-branding-cover";
      overlay.style.position = "fixed";
      overlay.style.pointerEvents = "none";
      overlay.style.background = "#ffffff";
      overlay.style.borderRadius = "999px";
      overlay.style.zIndex = "2147483647";
      overlay.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.08)";
      overlay.style.transition = "all 0.12s ease";
      overlayRef.current = overlay;
      document.body.appendChild(overlay);
    }

    const overlay = overlayRef.current;
    const rect = iframe.getBoundingClientRect();
    overlay.style.width = `${Math.max(rect.width, 220)}px`;
    overlay.style.height = `36px`;
    overlay.style.left = `${rect.left}px`;
    overlay.style.top = `${rect.bottom - 36}px`;
    overlay.style.display = "block";
  };

  const hideTawkBranding = () => {
    const parentStyleId = "hide-tawk-branding-style";
    if (!document.getElementById(parentStyleId)) {
      const style = document.createElement("style");
      style.id = parentStyleId;
      style.textContent = `
        iframe[src*="tawk.to"],
        iframe[src*="embed.tawk.to"],
        iframe[src*="tawk"] {
          overflow: hidden !important;
          clip-path: inset(0 0 40px 0) !important;
          height: calc(100% + 40px) !important;
          margin-bottom: -40px !important;
        }
        .tawk-embed,
        .tawk-embed #tawkchat-container,
        .tawk-small,
        .tawk-minified,
        .tawk-maximized,
        .tawk-large {
          overflow: hidden !important;
        }
      `;
      document.head.appendChild(style);
    }

    const iframes = Array.from(document.querySelectorAll('iframe[src*="tawk.to"], iframe[src*="embed.tawk.to"], iframe[src*="tawk"]')) as HTMLIFrameElement[];
    iframes.forEach((iframe) => {
      iframe.style.setProperty("overflow", "hidden", "important");
      iframe.style.setProperty("clip-path", "inset(0 0 40px 0)", "important");
      iframe.style.setProperty("height", "calc(100% + 40px)", "important");
      iframe.style.setProperty("margin-bottom", "-40px", "important");
      iframe.style.setProperty("transform", "translateY(-2px)", "important");

      const parent = iframe.parentElement;
      if (parent) {
        parent.style.setProperty("overflow", "hidden", "important");
      }

      createBrandingOverlay(iframe);
    });
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(hideTawkBranding, 250);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
      const overlay = overlayRef.current;
      if (overlay && overlay.parentElement) {
        overlay.parentElement.removeChild(overlay);
      }
    };
  }, []);

  return (
    <>
      <TawkMessengerReact
        propertyId="6a4d347a4b956a1d4cbbe1f2"
        widgetId="1jsupa0i5"
        onLoad={hideTawkBranding}
      />
      <Home />
    </>
  );
}

export default App;