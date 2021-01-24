import React from "react";
import Body1 from "./Components/Body1";
import Foo from "./Components/Foo";
import Navbar from "./Components/Navbar";
import "./index.scss";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body1 />
      <Foo />
    </div>
  );
}

export default App;
