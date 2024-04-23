import React from 'react'
import './appuser.css'



const AppUser = () => {
  return (
    <div className='addUser'>
      <form action="">
        <input type="text" placeholder='Username' name='username'/>
        <button>search</button>
    </form>
    <div className='user'>
        <div className="detail">
            <img src='./avatar.png' alt="" />
            <span>Jane Joe</span>
        </div>
        <button>Add User</button>
    </div>
    </div>
  )
}
import './appuser.css'
export default AppUser
