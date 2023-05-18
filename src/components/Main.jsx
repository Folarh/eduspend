import React from "react";
import Details from "../components/Details";
import MusicContainer from "./MusicContainer";

export default function Main() {
  return (
    <div className="app">
      <div className="search">
        <div>
          <p>Contact us</p>
        </div>

        <button>Signup</button>
      </div>
      <main className="main-section">
        <Details />
        <MusicContainer />
      </main>
    </div>
  );
}
