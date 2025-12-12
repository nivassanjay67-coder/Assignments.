import React, { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <h1>Live Clock</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default LiveClock;