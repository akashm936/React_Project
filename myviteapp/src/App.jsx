import Myintro from "./Myintro"





function App() {
  const username = "Akash Morwal"
  
  return (
    <>
      <Myintro/>
                {/* this is evaluated expression */}
      <h1> Hello {username} How Are you??</h1>
    </>
   
    
  )
}

export default App
