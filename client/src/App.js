import './App.css';
import React, { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';



function App() {


  return <Routes>
    <Route path='/' element={<WelcomeScreen />}/>
    <Route path='/login' element={<LoginScreen />}/>
    <Route path='/users/forgetmail' element={<ForgetPasswordMailScreen/>}/>
    <Route path='/users/reset-password/:id/:token' element={<ForgetPasswordResetPasswordScreen/>}/>
  </Routes>
}

export default App;