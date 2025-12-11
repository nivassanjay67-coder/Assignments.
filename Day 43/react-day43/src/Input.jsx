import { useState } from "react";

function Input() {
  const [text, setText] = useState("");

  return (
    <>
      <h3>Type something:</h3>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed:</p>
      <div style={{ fontWeight: "bold" }}>{text}</div>
    </>
  );
}

export default Input;
