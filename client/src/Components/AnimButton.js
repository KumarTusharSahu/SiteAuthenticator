import "../Assets/css/AnimButton.css"
import React from 'react'

const AnimButton = ({ children }) => {
    return (
        <div className="links anim">
            <div className="btncontent">
                <button><span></span>{children}</button>
            </div>
        </div>
    )
}

export default AnimButton

