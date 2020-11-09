import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" 
                src="https://play-lh.googleusercontent.com/p4OrpVf1Vl01WQxg43F_mWz4yXOtSnlnnwyFEJLulveQZYuIwb-2-Vk0B9XSnTjAEA" alt="" />
                <div className = "home__row">
                    <Product />
                    <Product />
                    {/* Product */}
                    {/* Product */}
                </div>
                
                <div className="home__row">
                    <Product />
                    {/* Product */}               
                </div>
                <div className="home__row">
                    {/* Product */}               
                </div>
            </div>
        </div>
    );
}

export default Home
