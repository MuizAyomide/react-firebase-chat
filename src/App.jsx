import Login from "./components/Login/Login"
import Notification from "./components/Notification/Notification"
import Chat from "./components/chat/Chat"
import Details from "./components/details/Details"
import List from "./components/list/List"

const App = () => {

  const user = false;


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
      <Notification/>
    </div>
  )
}

export default App