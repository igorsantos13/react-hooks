import React from 'react'
import { useState } from 'react'

function State() {
    const [counter, setCounter] = useState(0);

    function increase(){
        setCounter(counter=> counter +=1)
    }

    function decrease(){
        setCounter(counter =>counter -=1)
    }

    function reset(){
        setCounter(counter=> counter = 0)
    }
  return (
    <div>
        <p>Counter: {counter}</p>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrase</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default State