import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import './styles.css';
import { signup } from '../../services/auth';
const Signup = () => {
    const [signupForm, setSignupForm] = useState(
        {
            email: '',
            password: '',
            phone: ''
        });
    const signupHandle = async () => {
        const res = await signup(signupForm);
    }
    return (
        <Card className='card'>
            <Form >
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>Email address</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="email" placeholder="email"
                            onChange={(e) => { setSignupForm({ ...signupForm, email: e.target.value }) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={4}>Password</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="password" placeholder="mật khẩu"
                            onChange={(e) => { setSignupForm({ ...signupForm, password: e.target.value }) }} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm={4}>Phone Number</Form.Label>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="số điện thoại"
                        onChange={(e) => {setSignupForm({...signupForm, phone: e.target.value })}} />
                    </Col>
                </Form.Group>
                <Button variant="primary" onClick={signupHandle}>
                    Đăng kí
                </Button>
                <div>
                    <NavLink to='/signin'>Đăng nhập</NavLink>
                </div>
            </Form>
        </Card>

    );
}

export default React.memo(Signup);