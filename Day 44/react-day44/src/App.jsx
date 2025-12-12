import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IsLoggedIn from './isLoggedIn'
import IsPremiumUser from './IsPremiumUser'
import Map from './Map'
import Message from './Message'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <IsLoggedIn/>
     <IsPremiumUser/>
     <Map/>
     <Message/>
     <Todo/>
    </>
  )
}

export default App
