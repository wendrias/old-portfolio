import React from "react";
import "./App.css";
import Navbar from "./components/navbar.tsx";
import Home from "./pages/home..tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";

function App() {
  let Page;
  let logo = "";
  let nav = "";

  switch (window.location.pathname) {
    case "/":
      Page = Home;
      nav = "light";
      logo = "light";
      break;
    case "/about":
      Page = About;
      nav = "light";
      logo = "dark";
      break;
    case "/projects":
      Page = Projects;
      nav = "light";
      logo = "light";

      break;
  }

  return (
    <div className="App">
      <Navbar navTheme={nav} logoTheme={logo} /> <Page />
    </div>
  );
}

export default App;
