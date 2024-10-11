import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  let  [counter,setCounter] = useState(15)
  // let counter  = 15;
   
  let addvalue = () =>{
    console.log("clicked" , counter);
    
    counter = counter + 1;
    setCounter(counter)
  }
  let removevalue = ()=>{
    console.log("clicked" , counter);
    counter = counter - 1;
    setCounter(counter)
    
  }

  return (
    <>
      <h1>HELLO AKASH</h1>
      
      <h2>counter value : {counter}</h2>
      <button onClick={addvalue}>add value{counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value{counter}</button>
      <p> footer {counter} </p>
    </>
  )
}

export default App
