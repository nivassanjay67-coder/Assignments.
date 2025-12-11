import { useState } from "react";

function Toggled() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggled;