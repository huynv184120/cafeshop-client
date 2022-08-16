import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { AiFillSetting } from 'react-icons/ai'
const UserInfo = () => {
    const user = useSelector(state => state.user.userInfo);
    const [userInfo, setUserInfo] = useState({
        id: user.id,
        email: user.email,
        phone: user.phone,
        address: user.address,
    })
    const [changeInfo, setChangeInfo] = useState(false);

    const changeInfoHandle = async () => {
        setChangeInfo(false);
    }

    return <Card id='custom_card'>
        <AiFillSetting onClick={() => {
            setChangeInfo(!changeInfo); setUserInfo({
                id: user.id,
                email: user.email,
                phone: user.phone,
                address: user.address,
            })
        }} />
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>Id</Form.Label>
                <Col sm={8}>
                    <Form.Control type="text" disabled={true} value={userInfo.id} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>Email</Form.Label>
                <Col sm={8}>
                    <Form.Control type="email" disabled={true} value={userInfo.email} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={4}>Phone number</Form.Label>
                <Col sm={8}>
                    <Form.Control type="text" disabled={!changeInfo} value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                <Form.Label column sm={4}>Address</Form.Label>
                <Col sm={8}>
                    <Form.Control type="text" disabled={!changeInfo} value={userInfo.address || ""}
                        onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })} />
                </Col>
            </Form.Group>
        </Form>
        {
            changeInfo &&
            <Button variant="primary" onClick={changeInfoHandle}>
                Cập Nhật
            </Button>
        }

    </Card>
}

export default UserInfo;