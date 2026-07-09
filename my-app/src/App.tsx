import Home from "./pages/Home";
// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  return (
    <>
      <TawkMessengerReact
        propertyId="6a4d347a4b956a1d4cbbe1f2"
        widgetId="1jsupa0i5"
      />
      <Home />
    </>
  );
}

export default App;