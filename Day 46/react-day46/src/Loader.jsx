import React from 'react'
import { useEffect } from 'react'
function Loader() {
    useEffect(() => {
    console.log("Component Loaded");
  }, []);
  return (
    <div>Hello, World!</div>
  )
}

export default Loader