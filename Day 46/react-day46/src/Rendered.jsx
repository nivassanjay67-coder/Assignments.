import React from 'react'
import { useEffect } from 'react'
function Rendered() {
    useEffect(() => {
    console.log("Rendered!");
  });
  return (
    <div>Hello, World!</div>
  )
}

export default Rendered