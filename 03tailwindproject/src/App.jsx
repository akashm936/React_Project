import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-green-400 fon text-black font-bold p-4 mb-4 rounded-xl"> Hello Tailwind CSS</h1>
     <Card username="Akash" btnText="Click me"/>
     <Card username="rahul" btnText="vist me"/>
  
    </>
  )
}

export default App
