import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Input from './Input'
import Toggled from './Taggoled'
import EvenOddChecker from './EvenOddChecker'
import ColorChanger from './ColorChanger'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button/>
     <Input/>
     <Toggled/>
     <EvenOddChecker/>
     <ColorChanger/>
    </>
  )
}

export default App
