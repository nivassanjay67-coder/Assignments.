import { useState } from "react";

function EvenOddChecker() {
  const [number, setNumber] = useState("");


  const isEven = number !== "" && Number(number) % 2 === 0;

  return (
    <div>
      <h3>Enter a number:</h3>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <p>
        {number === "" ? "" : isEven ? "Even" : "Odd"}
      </p>
    </div>
  );
}

export default EvenOddChecker;
