import React from "react";
import Login from "./component/login";
import Signup from "./component/signup";
import { BrowserRouter, Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import ContextProvider from "./context";

const App = () => {
  return (
    <div>
      <ContextProvider>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
};

export default App;
