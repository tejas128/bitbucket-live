import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./header.css"
function Header() {
    const {time,updateCount}=useContext(AppContext)
    return (
        <div className="header">
           
          
           <h2 className="time">Current Time is : {time}</h2>
           <button className="headerbtn" onClick={updateCount}>Click me</button>
          
           
           
           
        </div>
    )
}

export default Header
