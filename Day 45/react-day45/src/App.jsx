import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import UpperCase from './UpperCase'
import CheckBox from './CheckBox'
import DropDown from './DropDown'
import Password from './Password'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <UpperCase/>
      <CheckBox/>
      <DropDown/>
      <Password/>
    </>
  )
}

export default App
