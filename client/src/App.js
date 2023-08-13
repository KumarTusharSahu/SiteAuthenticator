import './App.css';
import React, { useState,useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';
import Background from './Components/Background';



function App() {


  const [backenddata,setbackendata] =useState();

  useEffect(()=>{
    fetch("/api").then(
      response=> response.json()
    ).then(
      data =>{
        setbackendata(data);
      }
    )
  },[])
  return (
    <div style={{height:'100%'}}> 
     
      <LoginScreen/>

    </div>
    
  );
}

export default App;