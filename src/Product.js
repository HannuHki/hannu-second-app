import React from 'react'
import "./Product.css";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";

function Product({ id, title, image, price, rating }) {
//    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>  
            <img
                //src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"    
                src={image}
                alt=""
            /> 

            <Link to="/checkout">
                <button>Add to Basket</button>
            </Link>
  
        </div>
    );
}

export default Product
