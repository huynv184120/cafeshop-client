import React from 'react';
import { memo } from "react";

const Message = ({ self, content }) => {
    return (
        <div className={self ? "self_message" : "message"} >
            <div className={self ? "self_content_message" : "content_message"}>
                <div className="message_text">{content}</div>
            </div>
        </div>
    )
}
export default memo(Message);
