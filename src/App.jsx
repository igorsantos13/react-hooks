import './App.css'
import State from './hooks/state-hooks/State'
import Reducer from './hooks/state-hooks/Reducer'

function App() {
  
  return (
    <>
     <div>
        <h2>State Hooks:</h2>
        <b>State</b>
        <State />
        <hr />
        <b>Reducer</b>
        <Reducer />
        <hr />

        <h2>Context Hooks:</h2>
        <b>Context</b>
        
     </div>
    </>
  )
}

export default App
