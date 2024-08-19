import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LoginRegister from "./components/LoginRegister";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Auth from "./auth/Auth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginRegister title={"Login"} />} />
        <Route path='/register' element={<LoginRegister title={"Rgister"} />} />
        <Route
          path='/dash'
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
