import "../Assets/css/AnimButton.css"
import React from 'react'

const AnimButton = ({ children, onClick }) => {
    return (
        <div className="links anim">
            <div className="btncontent">
                <button onClick={onClick}><span></span>{children}</button>
            </div>
        </div>
    )
}

export default AnimButton

