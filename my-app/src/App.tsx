import Home from "./pages/Home";
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  const hideTawkBranding = () => {
    const parentStyleId = "hide-tawk-branding-style";

    if (!document.getElementById(parentStyleId)) {
      const style = document.createElement("style");
      style.id = parentStyleId;
      style.textContent = `
        a[href*="tawk.to"],
        a[href*="tawt.ai"],
        .tawk-branding,
        .tawk-footer,
        .powered-by-tawk {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        iframe[title*="chat"] {
          height: calc(100% + 16px) !important;
        }
      `;
      document.head.appendChild(style);
    }

    const tryHideIframeBranding = () => {
      const iframe = document.querySelector('iframe[title*="chat"], iframe[src*="tawk"]');
      if (!iframe) {
        return;
      }

      try {
        const doc = (iframe as HTMLIFrameElement).contentDocument;
        if (doc) {
          const innerStyleId = "hide-tawk-branding-inner";
          if (!doc.getElementById(innerStyleId)) {
            const style = doc.createElement("style");
            style.id = innerStyleId;
            style.textContent = `
              a[href*="tawk.to"],
              a[href*="tawt.ai"],
              .tawk-branding,
              .tawk-footer,
              .powered-by-tawk {
                display: none !important;
              }
            `;
            doc.head.appendChild(style);
          }
        }
      } catch {
        const iframeEl = iframe as HTMLElement;
        iframeEl.style.height = "calc(100% + 16px)";
        iframeEl.style.overflow = "hidden";
        if (iframeEl.parentElement) {
          iframeEl.parentElement.style.overflow = "hidden";
        }
      }
    };

    const interval = window.setInterval(() => {
      hideTawkBranding();
      tryHideIframeBranding();
    }, 500);

    window.setTimeout(() => {
      window.clearInterval(interval);
    }, 6000);
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