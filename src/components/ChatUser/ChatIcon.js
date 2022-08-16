import React from "react";
import chatIcon from "../../assets/icon/chat.png";
import closeIcon from "../../assets/icon/cross.png";
import { useSelector, useDispatch } from "react-redux";
import { showFrame } from "../../redux/actions/chatUser";

const ChatIcon = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.chatUser.showFrame);

  return (
    <div
      className="iconChat"
      onClick={() => {
        dispatch(showFrame());
      }}
    >
      <img src={show ? closeIcon : chatIcon}></img>
    </div>
  );
};

export default ChatIcon;
