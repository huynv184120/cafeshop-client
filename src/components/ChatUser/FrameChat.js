import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import ContainerMessage from "../Message.js/ContainerMessage";
import InputMessage from "../Message.js/InputMessage";

const FrameChat = () => {
    const show = useSelector(state => state.chatUser.showFrame);
    const user = useSelector(state => state.user.userInfo);
    const listMessage = useSelector(state => state.chatUser.listMessage).map(mes => ({id:mes.id, self:(mes.from==user.id), content:mes.content}));
    return (
        <div>
            {show && <div className="frame_chat">
                <div className="header-frame_chat">
                    <b>
                        <p>nhân viên cửa hàng</p>
                    </b>
                </div>
                <div className="content_frame_chat">
                        <ContainerMessage listMessage={listMessage} />
                </div>
                <InputMessage/>
            </div>}
        </div>
    )
}
export default FrameChat;