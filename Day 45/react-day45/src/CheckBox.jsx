import React from 'react'
import { useState } from 'react'
function CheckBox() {
    const [checked, setChecked] = useState(false);
  return (
    <div>
        <label>
        <input
          type="checkbox"
          checked={checked}                
          onChange={(e) => setChecked(e.target.checked)}
        />
        Check me
      </label>

      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  )
}

export default CheckBox