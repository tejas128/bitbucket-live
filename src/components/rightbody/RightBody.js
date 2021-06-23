import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./rightbody.css"
function RightBody() {
    const {timearr}=useContext(AppContext)
    return (
        <div className="rightbody">
          
               {timearr.map(time=><p className="clicktime">You clicked at {time}</p>)}
         
            
         </div>
         
    )
}

export default RightBody
