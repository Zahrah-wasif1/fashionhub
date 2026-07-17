import Home from "./pages/Home";
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { useRef } from "react";

function App() {
  const intervalRef = useRef<number | null>(null);

  const hideTawkBranding = () => {
    // 1. Inject parent style once to push the iframe down and clip the branding
    const parentStyleId = "hide-tawk-branding-style";
    if (!document.getElementById(parentStyleId)) {
      const style = document.createElement("style");
      style.id = parentStyleId;
      style.textContent = `
        /* Target the chat widget iframe container */
        iframe[title*="chat"], iframe[src*="tawk.to"] {
          bottom: -15px !important;
          height: calc(100% + 15px) !important;
        }
      `;
      document.head.appendChild(style);
    }

    // 2. Clear any existing interval to prevent memory leaks
    if (intervalRef.current) clearInterval(intervalRef.current);

    // 3. Continuously re-apply style properties if Tawk's script resets them
    intervalRef.current = window.setInterval(() => {
      const iframe = document.querySelector('iframe[title*="chat"], iframe[src*="tawk"]') as HTMLElement;
      if (iframe) {
        iframe.style.setProperty("bottom", "-15px", "important");
        iframe.style.setProperty("height", "calc(100% + 15px)", "important");
      }
    }, 300);

    // 4. Stop checking after 10 seconds once widget is fully stabilized
    window.setTimeout(() => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    }, 10000);
  };

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