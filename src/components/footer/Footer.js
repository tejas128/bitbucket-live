import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import "./footer.css"
function Footer() {
    const {count}=useContext(AppContext)
    return (
        <div className="footer">
           <h3 className="footer-text">You clicked {count} times</h3>
        </div>
    )
}

export default Footer
