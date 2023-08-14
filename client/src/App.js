import './App.css';
import React, { useState,useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';
import Background from './Components/Background';
import { Route, Routes } from 'react-router-dom';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';



function App() {


  return <Routes>
    <Route path='/' element={<LoginScreen />}/>
    <Route path='/forgetmail' element={<ForgetPasswordMailScreen/>}/>
    <Route path='/resetpass' element={<ForgetPasswordResetPasswordScreen/>}/>
  </Routes>
}

export default App;