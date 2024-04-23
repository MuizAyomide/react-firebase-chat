import React, { useState } from 'react'
import './Chatlist.css'
import App from '../../../App'
import AppUser from '../../AppUser/AppUser'
const Chatlist = () => {

const [addMode,setAddMode] = useState(false)


  return (
    <div className='chatlist'>
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode?"./minus.png":"./plus.png"} alt="" className='add'
        onClick={()=>setAddMode(prev=>!prev)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div> <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div> <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="text">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      {addMode && <AppUser/>}
    </div>
  )
}

export default Chatlist
