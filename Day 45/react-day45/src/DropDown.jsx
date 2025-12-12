import React from 'react'
import { useState } from 'react'
function DropDown() {
    const [country, setCountry] = useState("");
  return (
    <div>
        <label>
        Choose a country:{" "}
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">--Select--</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </label>

      {country && <p>You selected: {country}</p>}
    </div>
  )
}

export default DropDown