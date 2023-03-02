import React from "react";
import Component6 from "./Component/Component6.js";
import Container1 from "./Component/Container1.js";
import Container2 from "./Component/container2.js";
import Container3 from "./Component/Container3.js";
import Container4 from "./Component/Container4.js";
import Container5 from "./Component/Container5.js";
import css from "./style.css";
import Header from "./Component/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Component6 />
    </div>
  );
}

export default App;
