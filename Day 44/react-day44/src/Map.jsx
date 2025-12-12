import React from 'react'

function Map() {
    const cities = ["New York", "London", "Tokyo", "Sydney", "Paris"];
  return (
    <ul>
        {cities.map((city, index) => (
        <li key={index}>{city}</li>
      ))}
    </ul>
  )
}

export default Map