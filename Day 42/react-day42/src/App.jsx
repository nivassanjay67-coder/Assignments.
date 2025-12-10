import { useState } from 'react'
import './App.css'
import Student from './student'
import HellowStudent from './HellowStudent'
import Message from './Message'
import Button from './Button'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student/>
      <HellowStudent/>
      <Message/>
      <Button/>
      <Card/>
    </>
  )
}

export default App
