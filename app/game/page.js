"use client"
import { useState } from "react"

const game = () => {

  const [number, setNumber] = useState(0)
  const [string, setString] = useState("")

  const increment = () => {
    setNumber(number + 1)
  }

  const decrement = () => {
    setNumber(number - 1)
  }

  const getValueOfString = () => {
    setString("bite")
  }

  return (
    <>
      <div>{number}</div> 
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <div>{string}</div>
      <div onClick={() => getValueOfString()}>click</div>
    </>
  )
}

export default game
