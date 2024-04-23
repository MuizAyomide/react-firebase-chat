import Login from "./components/Login/Login"
import Chat from "./components/chat/Chat"
import Details from "./components/details/Details"
import List from "./components/list/List"

const App = () => {

  const user = false


  return (
    <div className='container'>
      {
        user ? (
          <>
          <List/>
          <Chat/>
          <Details/>        
          </>
        ):(<Login/>)
      }
    </div>
  )
}

export default App