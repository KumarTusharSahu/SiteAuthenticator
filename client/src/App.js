import './App.css';
import React, { useState, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';
import ErrorScreen from './Screens/ErrorScreen';



function App() {


  return (
    <Routes>
      <Route path='/' element={<WelcomeScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/users/forgetmail' element={<ForgetPasswordMailScreen />} />
        <Route path='/users/reset-password/:id/:token' element={<ForgetPasswordResetPasswordScreen />} />
        <Route path='*' element={<ErrorScreen />} />
    </Routes>
  )
}

export default App;