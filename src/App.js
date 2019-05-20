import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Banner
        message={`I create websites exactly how my clients want them. Responsive, neat and clean!`}
      />
      <Projects />
    </div>
  );
}

export default App;
