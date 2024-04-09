import React, { useEffect, useState } from "react";
import "./App.css";

interface MtmItem {
  ["mtm.startTime"]: number;
  event: string;
}

interface MatomoTracker {
  push: (...args: any[]) => void;
}

// Initialize _mtm as a global variable with the correct type
declare global {
  interface Window {
    _mtm?: MtmItem[];
    _paq?: MatomoTracker[];
  }
}

function App() {
  const [visitId, setVisitId] = useState("");

  useEffect(() => {
    const _mtm = (window._mtm = window._mtm || []);
    const _paq = (window._paq = window._paq || []);

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

    // get the current crossdomain id
    _paq.push([
      function (this: any) {
        setVisitId(
          this.getCrossDomainLinkingUrlParameter().replace("pk_vid=", "")
        );
      },
    ]);
  }, []);

  return (
    <div className="App">
      <h1>Min Side</h1>
      <h2>Domenenavn: {window.location.origin}</h2>
      <h2>Besøks ID: {visitId}</h2>
      <button>Klikk for å trigge et event!</button>
      <a href={"https://matomo-site2-aa9e74583c58.herokuapp.com/"}>
        Gå til et annet domene for å gjøre en oppgave
      </a>
    </div>
  );
}

export default App;
