import React from 'react';
import Message from './Message';
const ContainerMessage = ({ listMessage }) => {
    return (
        <div className="container-message">
            {listMessage.map(mes => <Message key={mes.id} self={mes.self} content={mes.content}/>)}
        </div>)
}

export default ContainerMessage;