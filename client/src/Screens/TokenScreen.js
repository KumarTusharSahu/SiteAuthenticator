import React, { useState } from 'react'
import "../Assets/css/TokenScreen.css"
import 'animate.css';

import token from "../Assets/images/token.webp"

const TokenScreen = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState();

    const addItem = () => {
        if (!inputData) {
            alert("Please enter a valid url");
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })

            )
            setToggleSubmit(true);

            setInputData("");

            setIsEditItem();

        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData("");
        }
    }

    const deleteItem = (index) => {
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id;
        });

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);
    }

    return (
        <>
            <div className='tokenContainer animate__animated animate__bounce'>
                <div className='token-main-div'>
                    <div className='token-child-div' >
                        <h1>Add websites to be blocked</h1>
                        <div className='addItems'>
                            <input
                                type='text'
                                placeholder='✍Enter URL of website...'
                                value={inputData}
                                onChange={(event) => {
                                    setInputData(event.target.value);
                                }} />
                            {
                                toggleSubmit ? <button
                                    className="add-btn generate-token-btn"
                                    title="Block URL"
                                    onClick={addItem}
                                >
                                    Generate Token
                                </button>
                                    :
                                    <i className="far fa-edit add-btn" title="Update URL" onClick={addItem}></i>
                            }





                        </div>
                        <div className="showItems">

                            {
                                items.map((elem) => {
                                    return (
                                        <div className='eachItem' key={elem.id}>
                                            <h3>{elem.name}</h3>
                                            <div className="token-btn">
                                                <i className="far fa-edit add-btn" title="Edit URL" onClick={() => editItem(elem.id)}></i>
                                                <i className="far fa-trash-alt add-btn" title="Remove URL" onClick={() => deleteItem(elem.id)}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="showItems">
                            <button className="tokenbtn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                        </div>
                    </div>
                </div>
                <img src={token} alt="" />
            </div>
        </>
    )
}

export default TokenScreen
