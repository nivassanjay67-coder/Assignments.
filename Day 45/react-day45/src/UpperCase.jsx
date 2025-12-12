import React from 'react'
import { useState } from 'react'
function UpperCase() {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
    const upper = e.target.value.toUpperCase();
    setValue(upper);
  };
  return (
    <div>
        <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="TYPE HERE"
      />
    </div>
  )
}

export default UpperCase