import React from 'react'

function IsLoggedIn() {
  return (
    <div>
        {IsLoggedIn ? <h2>Logged In</h2> : <h2>Guest</h2>}
    </div>
  )
}


export default IsLoggedIn