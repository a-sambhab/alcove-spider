import React from 'react';
import './shop.css'

const Shop = () => {
    return(
        <>  
            <div className="shopsec">
                <div className="shopsechead">
                    <h1>shop</h1>
                </div>
                <div className="shopseccon">
                    <div className="shopcard">
                        <div className="shopcardimg">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630523478/alcove/e7baf979310c78231e1ca85583c5ffc1_ytiovm.jpg"/>
                        </div>
                        <div className="shopcardcon">
                            <h2>Light</h2>
                            <span>$5</span>
                            <button >Buy Now</button>
                        </div>
                    </div>
                    <div className="shopcard">
                        <div className="shopcardimg">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630523478/alcove/e7baf979310c78231e1ca85583c5ffc1_ytiovm.jpg"/>
                        </div>
                        <div className="shopcardcon">
                            <h2>Light</h2>
                            <span>$5</span>
                            <button >Buy Now</button>
                        </div>
                    </div>
                    <div className="shopcard">
                        <div className="shopcardimg">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630523478/alcove/e7baf979310c78231e1ca85583c5ffc1_ytiovm.jpg"/>
                        </div>
                        <div className="shopcardcon">
                            <h2>Light</h2>
                            <span>$5</span>
                            <button >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;