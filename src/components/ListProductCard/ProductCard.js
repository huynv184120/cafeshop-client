import React from "react";
import logo from '../../assets/logo/logo.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch , useSelector} from "react-redux";
import { addProductToCart } from "../../redux/actions/cart";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, discount, status, description, imgUrl }) => {
    if (!imgUrl) {
        imgUrl = logo;
    }
    const user = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addProduct = () => {
        if(user.email){
            dispatch(addProductToCart({id, name,price, discount}));
        }else{
            navigate('/signin');
        }
    }
    return <Card className='card' style={{ width: '250px' }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>{price} đ</Card.Title>
            <Card.Text>
            </Card.Text>
            <Button variant="primary" onClick={addProduct}>Thêm</Button>
        </Card.Body>
    </Card>
}

export default React.memo(ProductCard);