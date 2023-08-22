import "./App.css";

import LoginScreen from "./Screens/LoginScreen";

import { Route, Routes } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen";
import ForgetPasswordMailScreen from "./Screens/ForgetPasswordMailScreen";
import ForgetPasswordResetPasswordScreen from "./Screens/ForgetPasswordResetPasswordScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";


function App() {
 
 

  return (
    <Routes>
         <Route path="/" element={<WelcomeScreen />} />
      <Route path="/users/login" element={<LoginScreen />} />
      <Route path="/users/forgetmail" element={<ForgetPasswordMailScreen />} />
      <Route
        path="/users/reset-password/:id/:token"
        element={<ForgetPasswordResetPasswordScreen />}
      />
    
        <Route path="/users/home" element={<HomeScreen />} />
      
    </Routes>
  );
}

export default App;
