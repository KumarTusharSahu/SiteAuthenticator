import React from 'react'
import "../Assets/css/TokenScreen.css"
import 'animate.css';

import token from "../Assets/images/token.webp"

const TokenScreen = () => {
    return (
        <>
            <div className='tokenContainer animate__animated animate__bounce'>
                <div className='token-main-div'>
                    <div className='token-child-div' >
                        <h1>Add websites to be blocked</h1>
                        <div className='addItems'>
                            <input type='text' placeholder='✍Enter URL of website...' />
                            {/* <i className="fa fa-plus add-btn" title="Block URL" ></i> */}
                            <button className="add-btn generate-token-btn" title="Block URL">Generate Token</button>



                        </div>
                        <div className="showItems">

                            //map will come here
                            
                            <div className='eachItem'>
                                <h3>https://facebook.com</h3>
                                <div className="token-btn">
                                    <i className="far fa-edit add-btn" title="Edit URl" ></i>
                                    <i className="far fa-trash-alt add-btn" title="Remove URL"></i>
                                </div>
                            </div>
                            <div className='eachItem'>
                                <h3>https://instagram.com</h3>
                                <div className="token-btn">
                                    <i className="far fa-edit add-btn" title="Edit Item" ></i>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item"></i>
                                </div>
                            </div>



                        </div>
                        <div className="showItems">
                            <button className="tokenbtn effect04" data-sm-link-text="Remove All" ><span> CHECK LIST </span> </button>
                        </div>
                    </div>
                </div>
                <img src={token} alt="" />
            </div>
        </>
    )
}

export default TokenScreen
