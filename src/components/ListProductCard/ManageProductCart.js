import React from "react";
import logo from '../../assets/logo/logo.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ManageProductCard = ({ id, name, price, discount, status, description, imgUrl }) => {
    if (!imgUrl) {
        imgUrl = logo;
    }
    
    return <Card className='card' style={{ width: '250px' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price} đ</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">Thay đổi thông tin</Button>
        </Card.Body>
    </Card>
}

export default React.memo(ManageProductCard);