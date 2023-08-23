import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'toggle':
            return {boolean: !state.boolean}
        default:
            return state
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, {boolean: false})
  return (
    <div>
        <button onClick={() => {
        dispatch({type: 'toggle'})
    }}>Click here!</button>
    
    {state.boolean && <p>Oh, hey!</p>}
    </div>
  )
}

export default Reducer