import './App.css';
import React, { useState, useEffect } from 'react';
import LoginScreen from './Screens/LoginScreen';

import { Route, Routes } from 'react-router-dom';

import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import ForgetPasswordMailScreen from './Screens/ForgetPasswordMailScreen';
import ForgetPasswordResetPasswordScreen from './Screens/ForgetPasswordResetPasswordScreen';
import TokenScreen from './Screens/TokenScreen';
import ErrorScreen from './Screens/ErrorScreen';

import NavBar from './Components/NavBar';




function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<WelcomeScreen />} />
        <Route path='/users/home' element={<HomeScreen />} />
        <Route path='/users/login' element={<LoginScreen />} />
        <Route path='/users/forgetmail' element={<ForgetPasswordMailScreen />} />
        <Route path='/users/reset-password/:id/:token' element={<ForgetPasswordResetPasswordScreen />} />
        <Route path='/users/token' element={<TokenScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </>
  );
}

export default App;