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
import { getUser } from "./services/user";
import Cookies from "js-cookie";
import { updateUserInfo } from "./redux/actions/user";
import ManagePage from "./containers/ManagePage";
import ShopPage from "./containers/ShopPage";
import io from "socket.io-client";
import config from "./config";
import socketEvent from "./socketEvent";
import { Notifications } from 'react-push-notification';

const socket = io(config.SOCKET_SERVER);
let connectSocket = false;

const App = () => {
  const dispatch = useDispatch();
  getListProDuct().then((data) => {
    dispatch(updateProduct(data));
  });
  const token = Cookies.get("token");
  const userId = Cookies.get("user_id");
  const user = useSelector(state => state.user.userInfo);
  if (token && !user.email && !connectSocket) {
    getUser(userId).then((data) => {
      dispatch(updateUserInfo(data));
    });
  }
  if(token && !connectSocket){
    connectSocket=true;
    socket.emit(socketEvent.online, {token});
  }
  return (
    <div className="App">
      <Notifications/>
      {(user.role == "user" || !user.role) && (
        <div className="container-user">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/manage" element={<ManagePage/>}/>
          </Routes>
          <ChatUser />
        </div>
      )}
      {(user.role == "shop") && (
        <div>
          <Routes>
            <Route path="/" element={<ShopPage/>}/>
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
