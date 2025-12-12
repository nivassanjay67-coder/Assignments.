import React from 'react'
import { useState } from 'react';
function Home() {
    const [name, setName] = useState("");
  return (
    <div>
        <input
        type="text"
        value={name}           
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Hello, {name || "…"}</h2>
    </div>
  )
}

export default Home