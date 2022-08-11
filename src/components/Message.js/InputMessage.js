import React from 'react';
import Form from 'react-bootstrap/Form';

const InputMessage = ({send}) => {
    return (
        <div className='input_message'>
            <Form onsubmit={send}>
                <Form.Control type='text'/>
            </Form>
        </div>
    )
}
export default InputMessage;