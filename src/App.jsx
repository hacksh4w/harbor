import React, {useState, useContext, createContext, useEffect} from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Landing from "./pages/landing/landing";
import SignupPage from "./pages/signup/SignupPage";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import Navbar from './components/navbar/Navbar';
import { ReportForm } from "./pages/reportForm/ReportForm";
import { Response } from "./pages/response/Response";

export const ThemeContext = React.createContext();
export const FirebaseContext = React.createContext(null);

export default function App() {
  {
    /* initialize();  for firebase */
  }
  const [signupState,setSignupState] = useState(false);
  const [loginState,setLoginState] = useState(false);
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);

{/*
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  });

*/}

  return (
    <div className="App">
      <ThemeContext.Provider value={{loginState,setLoginState,signupState,setSignupState,user,setUser}}>
      <Navbar />
      

      {/* ------------------------------Landing Page----------------------------------- */}

      

        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<SignupPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/reportform" element={<ReportForm />}></Route>
          <Route path="/response" element={<Response />}></Route>
        </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}
