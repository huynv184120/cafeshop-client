import React from "react";
import chatIcon from "../../assets/icon/chat.png";
import closeIcon from "../../assets/icon/cross.png";
import { useSelector , useDispatch} from "react-redux";
import { showFrame } from "../../redux/actions/chatUser";
import { useCallback } from "react";
const ChatIcon = () => {
  const dispatch = useDispatch();
  const show = useSelector(state => state.chatUser.showFrame);
  const showFameChat = useCallback(() => {
    dispatch(showFrame());
  })
  return (
    <div className="iconChat">
      <img src={show?closeIcon:chatIcon} onClick={showFameChat}></img>
    </div>
  );
};

export default ChatIcon;
