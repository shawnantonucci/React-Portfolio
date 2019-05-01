import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/shawn-react-portfolio.appspot.com/o/images%2Flogo.svg?alt=media&token=5e3427a2-e391-4afb-9acc-9b6a4ca41992"
          }
          className="App-logo"
          alt="logo"
        />
      </header>

    </div>
  );
}

export default App;
