import React from 'react'
import { useState } from 'react'

const Count = () => {
    function inc(){
      setcount(countt+1)
    }
    function dic(){
        setcount(countt-1)
    }
    function reset(){
        setcount('Zero')
    }
    const[countt ,setcount]=useState(0)
  return (
    <div>
        <h2>{countt}</h2>
        <button onClick={inc}>Increament</button>
        <button onClick={dic}>Decrement</button>
        <button onClick={reset}>Reset</button>


    </div>
  )
}

export default Count