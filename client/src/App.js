import './App.css';
import React, { useState, useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';

import { Route, Routes } from 'react-router-dom';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';
import WelcomeScreen from './Screens/WelcomeScreen';



function App() {


  return <Routes>
    <Route path='/' element={<WelcomeScreen />}/>
    <Route path='/login' element={<LoginScreen />}/>
    <Route path='/users/forgetmail' element={<ForgetPasswordMailScreen/>}/>
    <Route path='/users/reset-password/:id/:token' element={<ForgetPasswordResetPasswordScreen/>}/>
  </Routes>
}

export default App;