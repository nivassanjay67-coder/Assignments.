import React from "react";

function Card({ children }) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    background: "#fff",
  },
};

export default Card;
