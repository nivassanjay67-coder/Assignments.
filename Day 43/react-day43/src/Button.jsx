import React, { useState } from 'react'

function Button() {
    
 const [count, setcount] =useState(0)
  return (
 <>
<button onClick={()=> setcount(c => c +1)}>Increase</button>
<button onClick={()=> setcount(c => c -1)}>Decreasr</button>
<h2>{count}</h2>
 </>
  )
}

export default Button