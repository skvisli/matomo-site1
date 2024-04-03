import React, { useEffect } from "react";
import "./App.css";

interface MtmItem {
  ["mtm.startTime"]: number;
  event: string;
}

// Initialize _mtm as a global variable with the correct type
declare global {
  interface Window {
    _mtm: MtmItem[];
  }
}

function App() {
  useEffect(() => {
    const _mtm = (window._mtm = window._mtm || []);
    _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
    (function () {
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src =
        "https://cdn.matomo.cloud/skvisli.matomo.cloud/container_hMpn3JxK.js";
      s.parentNode?.insertBefore(g, s);
    })();
  }, []);

  return (
    <div className="App">
      <button>Klikk meg!</button>
      <a
        className="App-link"
        href="https://skatteetaten.no"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gå til skatteetaten.no
      </a>
    </div>
  );
}

export default App;
