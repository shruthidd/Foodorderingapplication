//import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {

  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name:"Shruthi D",
    };
    setUserName(data.name);
  }, [])
  return (
    <Provider store = {appStore}> <userContext.Provider  value={{loggIn:userName , setUserName}}>
    <div className="applayout">
    <Header />
    <Outlet />
  </div> </userContext.Provider>
  </Provider>
   
    
  );
}
 

export default AppLayout;