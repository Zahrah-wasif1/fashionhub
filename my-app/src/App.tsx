import Home from "./pages/Home";
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useEffect, useRef } from "react";

function App() {
  const intervalRef = useRef<number | null>(null);

  const hideTawkBranding = () => {
    const parentStyleId = "hide-tawk-branding-style";
    if (!document.getElementById(parentStyleId)) {
      const style = document.createElement("style");
      style.id = parentStyleId;
      style.textContent = `
        iframe[src*="tawk.to"],
        iframe[src*="embed.tawk.to"],
        iframe[src*="tawk"] {
          clip-path: inset(0 0 22px 0) !important;
          height: calc(100% + 22px) !important;
          margin-bottom: -22px !important;
          overflow: hidden !important;
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
      iframe.style.setProperty("clip-path", "inset(0 0 22px 0)", "important");
      iframe.style.setProperty("height", "calc(100% + 22px)", "important");
      iframe.style.setProperty("margin-bottom", "-22px", "important");
      iframe.style.setProperty("overflow", "hidden", "important");

      const parent = iframe.parentElement;
      if (parent) {
        parent.style.setProperty("overflow", "hidden", "important");
        parent.style.setProperty("height", "100%", "important");
      }
    });
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(hideTawkBranding, 250);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
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