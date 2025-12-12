import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rendered from './Rendered'
import Loader from './Loader'
import Counter from './Counter'
import NameLogger from './NameLogger'
import CounterWithTitle from './CounterWithTitle'
import LiveClock from './LiveClock'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rendered/>
      <Loader/>
      <Counter/>
      <NameLogger/>
      <CounterWithTitle/>
      <LiveClock/>
    </>
  )
}

export default App
