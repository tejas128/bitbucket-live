import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./sidebar.css"
function Sidebar() {
    const {updateCount}=useContext(AppContext)
    return (
        <div className="sidebar-container">
            <div className="sidebarTop">
              <img className="sidebarlogo" src="images/time-logo.png"/>
                  
            </div>
            <div className="sidebarBottom">
               <button className="sidebarbtn" onClick={updateCount}>Click me</button>
                

            </div>

        </div>
    )
}

export default Sidebar
