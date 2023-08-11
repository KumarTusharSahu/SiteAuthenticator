import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginScreen from './Screens/LoginScreen';
import Background from './Components/Background';


function App() {
  return (
    <div style={{height:'100%'}}> 
     <Background
     entered = {true}/>
    </div>
  );
}

export default App;