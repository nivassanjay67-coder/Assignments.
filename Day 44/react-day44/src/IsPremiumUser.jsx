import React from 'react'

function IsPremiumUser() {
  return (
    <div>
        {IsPremiumUser && (
        <button>Premium Feature</button>
      )}
    </div>
  )
}

export default IsPremiumUser