import React from "react";
import GlobalStyles from "./assets/styles/global";

import ExperienceBar from "./components/ExperienceBar";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="container">
        <ExperienceBar />
      </div>
    </React.Fragment>
  );
}

export default App;
