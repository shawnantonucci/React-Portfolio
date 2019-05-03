import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectCarousel from "./components/ProjectCarousel";
import Banner from './components/Banner'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <ProjectCarousel />
    </div>
  );
}

export default App;
