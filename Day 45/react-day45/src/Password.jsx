import React from 'react'
import { useState } from 'react'
function Password() {
    const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const passwordsMatch = password === confirm;
  return (
    <div style={{ maxWidth: "300px", margin: "20px auto" }}>
        <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm password"
          />
        </label>
      </div>

      <div style={{ marginTop: "10px", fontWeight: "bold" }}>
        {confirm && (passwordsMatch ? (
          <span style={{ color: "green" }}>Passwords match ✅</span>
        ) : (
          <span style={{ color: "red" }}>Passwords do not match ❌</span>
        ))}
      </div>
    </div>
  )
}

export default Password