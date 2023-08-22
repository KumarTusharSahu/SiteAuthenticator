import './App.css';
import React, { useState, useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';

import { Route, Routes } from 'react-router-dom';

import HomeScreen from './Screens/HomeScreen';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';
import TokenScreen from './Screens/TokenScreen';
import ErrorScreen from './Screens/ErrorScreen';
import NavBar from './Components/NavBar';
import WelcomeScreen from './Screens/WelcomeScreen';




function App() {


  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<WelcomeScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/users/login' element={<LoginScreen />} />
        <Route path='/users/forgetmail' element={<ForgetPasswordMailScreen />} />
        <Route path='/users/reset-password/:id/:token' element={<ForgetPasswordResetPasswordScreen />} />
        <Route path='/token' element={<TokenScreen />} />
        <Route path='*' element={<ErrorScreen />} />
    </Routes>
    </div>
  )
}

export default App;