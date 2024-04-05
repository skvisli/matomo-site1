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

    // Matomo tracker has already been set up
    if (_mtm.length) return;

    console.log("adding tracking");

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

    console.log(window._mtm);
  }, []);

  return (
    <div className="App">
      <button>Klikk meg!</button>
      <a href="https://matomo-site2-aa9e74583c58.herokuapp.com/">
        Gå til matomo site2
      </a>
    </div>
  );
}

export default App;
