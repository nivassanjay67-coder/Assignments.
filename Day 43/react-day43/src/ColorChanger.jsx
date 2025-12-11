import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("lightblue");

  const changeColor = () => {
    const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "40px",
        textAlign: "center",
        borderRadius: "8px"
      }}
    >
      <button onClick={changeColor} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Change Background Color
      </button>
    </div>
  );
}

export default ColorChanger;
