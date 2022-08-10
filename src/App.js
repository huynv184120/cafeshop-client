import "./App.css";
import React from "react";
import { getListProDuct } from "./services/product";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "./redux/actions/product";
import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/Homepage";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Header from "./components/Header";
import ChatUser from "./components/ChatUser";

const App = () => {
  const dispatch = useDispatch();
  getListProDuct().then((data) => {
    dispatch(updateProduct(data));
  });
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="App">
      {(user.role == "user" || !user.role) && (
        <div className="container-user">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <ChatUser/>
        </div>
      )}
    </div>
  );
};

export default App;
