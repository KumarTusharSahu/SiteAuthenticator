import React from 'react'
import "../Assets/css/NeonButton.css"
import { Link } from "react-router-dom";

const NeonButton = ({ children, next }) => {
    return (
        <div class="neonbtns">
            {/* <a class="blue-btn" href="#">Neon Button</a> */}
            <Link to={next} className="blue-btn glow">{children}</Link>
        </div>
    )
}

export default NeonButton
