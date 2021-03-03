import React from "react";
import Head from "next/head";
import GlobalStyles from "../assets/styles/global";

import ExperienceBar from "../components/ExperienceBar";

export default function Home() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div className="container">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
          rel="stylesheet"
        />
        <ExperienceBar />
      </div>
    </React.Fragment>
  );
}
