import React, { useEffect, useState } from 'react'
import "../Assets/css/TokenScreen.css"
import 'animate.css';
import { useLocation } from 'react-router-dom';
import token from "../Assets/images/token.webp"
import axios from 'axios';

const TokenScreen = () => {
    const location = useLocation();

    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState();
    const [isBlocked, setIsBlocked] = useState(false);

    // const [copied, setCopied] = useState(false);

    useEffect(() => {
        const token = () => {
            axios
                .get("http://localhost:8000/users/token", {
                    withCredentials: true,
                })
                .then((res) => {
                    // console.log(res);
                    setData(res.data.website);
                });
        };

        token();
    }, []);


    /*const addweb=async (e)=>{
        e.preventDefault();
        const data=location.state.data;
        console.log(data)
        try {
            await axios.post("http://localhost:8000/users/token",{
              inputData,
              data
            })
             
        } catch (error) {
            console.log(error); 
        }
    }*/
    // console.log(data);

    const addItem = (e) => {
        e.preventDefault();
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

    const copyToClipboard = (id) => {

        let elemClicked = data.find((elem) => {
            return elem.id === id
        })

        // setCopied(true);

        navigator.clipboard.writeText(elemClicked.id);
        // setTimeout(() => {
        //     setCopied(false);
        // }, 1000);




    }

    const blockSiteHandler = () => {
        setIsBlocked(!isBlocked);
    }

    return (
        <>
            <div className='tokenContainer animate__animated animate__bounce'>
                <div className='token-main-div'>
                    <div className='token-child-div' >
                        <h1>Add websites to be blocked</h1>
                        <div className='addItems'>
                            <form method='post' action='http://localhost:8000/users/token' className='tokenForm'>
                                <input
                                    type='text'
                                    placeholder='✍Enter URL of website...'
                                    name="site"
                                    value={inputData}
                                    onChange={(event) => {
                                        setInputData(event.target.value);
                                    }} />
                                {
                                    toggleSubmit ? <button
                                        className="add-btn generate-token-btn"
                                        title="Block URL"
                                    >
                                        Generate Token
                                    </button>
                                        :
                                        <i className="far fa-edit add-btn" title="Update URL" onClick={addItem}></i>
                                }
                            </form>





                        </div>
                        <div className="showItems">
                            <h1>
                                {
                                    data.map((elem) => {
                                        return (
                                            <div className='eachItem' key={elem.id}>
                                            <div className={`url ${ isBlocked ? 'blockedSite' : ""}`}>
                                                <h3>{elem.site}</h3>
                                                <button className={isBlocked ? 'unblock':'block'} onClick={blockSiteHandler}>{isBlocked ? "Unblock" : "Block"}</button>
                                                </div>
                                                <div className='token'>
                                                    <h6>{elem.id}</h6>
                                                    {
                                                         <i className="fa-solid fa-copy copy" onClick={() => copyToClipboard(elem.id)} title="copy token" id={elem.id}></i>
                                                    }

                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </h1>

                            {/* {
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
                            } */}
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
