import { useState } from "react";
import "./App.scss";
import Hero_sect from "./component/Hero/Hero_sect";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Hero_sect />
      <Sidebar/>
    </div>
  );
}

export default App;
