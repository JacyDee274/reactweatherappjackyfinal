import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="conatainer">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/JacyDee274"
            target="_blank"
            rel="noreferrer"
          >
            Jacky Ilievski
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/JacyDee274/reactweatherappjackyfinal"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://jacky-weather-app-finale.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
