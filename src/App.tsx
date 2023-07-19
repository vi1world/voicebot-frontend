import { useState } from "react";
import Controller from "./components/Controller";
import TagManager from 'react-gtm-module';

function App() {
  // Initialize GTM
  TagManager.initialize({ gtmId: 'GTM-TZCT7VZ' });
  const [count, setCount] = useState(0);

  return (
    <div>
      <>
        <Controller />
      </>
    </div>
  );
}

export default App;
