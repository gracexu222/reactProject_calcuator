import React from "react";
import NameList from "./components/NameList";

function App() {
  const names = ["jojo", "Bottom", "Stunner"];

  return (
    <div className="App">
      <h1>My Name list</h1>
      <NameList names={names} />
    </div>
  );
}

export default App;
