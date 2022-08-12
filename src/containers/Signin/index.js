import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './styles.css';
import Cookies from 'js-cookie';
import {signin} from '../../services/auth';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    })
    const navigate =useNavigate();
    const signinHandle = async () => {
        const res = await signin(signinForm);
        if(res.success == true){
            Cookies.set('token', res.token);
            Cookies.set('user_id' ,res.user_id);
            navigate('../', { replace: true });
            window.location.reload();
        }
    }

    return <Card className='card'>
        <Form> 
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>Email address</Form.Label>
                <Col sm={8}>
                    <Form.Control type="email" placeholder="email" 
                    onChange={(e) => setSigninForm({ ...signinForm, email: e.target.value })}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={4}>Password</Form.Label>
                <Col sm={8}>
                    <Form.Control type="password" placeholder="mật khẩu"
                    onChange={(e) => setSigninForm({...signinForm, password: e.target.value })} />
                </Col>
            </Form.Group>
        </Form>
        <Button variant="primary"  onClick={signinHandle}> 
                Đăng Nhập
        </Button>
        <NavLink to='/signup'>Đăng kí</NavLink>
    </Card>
}

export default React.memo(Signin);