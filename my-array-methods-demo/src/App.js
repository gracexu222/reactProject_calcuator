import React, { useState } from "react";

function App() {
  const [original, setOriginal] = useState([1, 2, 3, 4, 5]);
  const [result, setResult] = useState(null);

  const reset = () => {
    setOriginal([1, 2, 3, 4, 5]);
    setResult(null);
  };

  const handleMap = () => {
    const newArray = original.map((x) => x * 2);
    setResult(newArray);
  };

  const handleFilter = () => {
    const newArray = original.filter((x) => x % 2 === 0);
    setResult(newArray);
  };

  const handleReduce = () => {
    const sum = original.reduce((acc, val) => acc + val, 0);
    setResult(sum);
  };

  const handleConcat = () => {
    const newArray = original.concat([6, 7]);
    setResult(newArray);
  };

  const handleSlice = () => {
    const newArray = original.slice(1, 4);
    setResult(newArray);
  };

  const handleEvery = () => {
    const allEven = original.every((x) => x % 2 === 0);
    setResult(allEven);
  };

  const handleSome = () => {
    const someEven = original.some((x) => x % 2 === 0);
    setResult(someEven);
  };

  const handleIncludes = () => {
    const doesInclude = original.includes(3);
    setResult(doesInclude);
  };

  const handleIndexOf = () => {
    const index = original.indexOf(3);
    setResult(index);
  };

  const handleJoin = () => {
    const joined = original.join("_");
    setResult(joined);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Array Method Purity Demonstration</h1>
      <p>
        <strong>Original Array:</strong> {JSON.stringify(original)}
      </p>
      <p>
        <strong>Result:</strong> {JSON.stringify(result)}
      </p>

      <button onClick={reset} style={{ marginBottom: "20px" }}>
        Reset
      </button>

      <h2>Pure Methods</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <button onClick={handleMap}>map()</button>
        <button onClick={handleFilter}>filter()</button>
        <button onClick={handleReduce}>reduce()</button>
        <button onClick={handleConcat}>concat()</button>
        <button onClick={handleSlice}>slice()</button>
        <button onClick={handleEvery}>every()</button>
        <button onClick={handleSome}>some()</button>
        <button onClick={handleIncludes}>includes()</button>

        <button onClick={handleIndexOf}>indexOf()</button>
        <button onClick={handleJoin}>join()</button>
      </div>
    </div>
  );
}

export default App;
