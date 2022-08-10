import React from "react";
import { useSelector } from "react-redux";
import ChatIcon from "./ChatIcon";
import './styles.css';
const ChatUser = () => {
  const hidden = useSelector((state) => state.chatUser.hidden);
  return (
    <div>
      {hidden ? (
       <ChatIcon/>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ChatUser;
