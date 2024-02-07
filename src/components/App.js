import React, { useState } from "react"
import { useEffect } from "react"

function App(){

  const[isLoaded, setIsLoaded]= useState(false)
  const[randomImg, setRandomImg]= useState('')

  useEffect (()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=> response.json())
    .then((data)=> {
        console.log(data)
        setRandomImg(data.message)
        setIsLoaded(true)
    })
  }, [])

  if(!isLoaded) return <p>Loading...</p>
  return (
  <div>
    <img src={randomImg} alt="A Random Dog"/>
    </div>)
}

export default App