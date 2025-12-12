import React, { useState, useEffect } from "react";

function NameLogger() {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]); 

  return (
    <div>
      <label>
        Enter your name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Your name is: {name}</p>
    </div>
  );
}

export default NameLogger;