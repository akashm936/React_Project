import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./Context/UserContextProvider"



function App() {
  
// fifth step
  return (
    <>
      <UserContextProvider>
        <h1>Hello Akash this is User Context Provider</h1>
        <Login/>
        <Profile/>
      
      </UserContextProvider>
    </>
  )
}

export default App
