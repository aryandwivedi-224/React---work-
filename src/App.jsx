import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]=useState(0)
  // let counter=15
  const addValue=()=>{
    // console.log("value added ",counter);
    // counter=counter+1;
    setCounter(counter+1)    
  }
  const removeValue=()=>{
    setCounter(counter-1)

  }



  return (
    <>
    <h1> Just Fun </h1>
   <div> <h2>counter Value : {counter}</h2></div>
    <button
    onClick={addValue}
    >Add value</button>
    <br/>
    <button
    onClick={removeValue}
    >remove value</button>
    </>
  )
}

export default App
