import React from "react";
import logo from '../../assets/logo/logo.jpg'
import Button from 'react-bootstrap/Button';
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
    return <div className='product_card'>
        <img  alt="#" src={`http://${imgUrl}`} />
        <div>
            <div>
            <b>{name}</b><br/>
            <b>{price} đ</b>
            </div>
            <Button variant="primary" onClick={addProduct}>Thêm</Button>
        </div>
    </div>
}
export default React.memo(ProductCard);