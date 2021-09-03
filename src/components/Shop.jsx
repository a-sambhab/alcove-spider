import React from 'react';
import './shop.css'

const Shop = () => {
    return(
        <>  
                <div className="svg-shopesection-topleftdiv"><img classname="svg-shopsection-topleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630691370/alcove/green_top_left_kf0sil.svg" alt=""/></div>
                <div className="svg-shopesection-bottomleftdiv"><img classname="svg-shopsection-bottomleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630692117/alcove/green_bottom_left_shop_y2uly8.svg" alt=""/></div>
            <div className="shopsec">
                <div className="shopsechead">
                    <h1>shop</h1>
                </div>
                <div className="shopseccon">
                    <div className="shopcard">
                        <div className="imgBx">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png"/>
                        </div>
                        <div className="contentBx">
                            <h3>Table Lamp</h3>
                            <h2 className="price">$40.<small>99</small></h2>
                            <a href="https://google.com" className="buy">Buy Now</a>
                        </div>
                    </div>
                    <div className="shopcard">
                        <div className="imgBx">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png"/>
                        </div>
                        <div className="contentBx">
                            <h3>Table Lamp</h3>
                            <h2 className="price">$40.<small>99</small></h2>
                            <a href="https://google.com" className="buy">Buy Now</a>
                        </div>
                    </div>
                    <div className="shopcard">
                        <div className="imgBx">
                            <img alt="shopimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png"/>
                        </div>
                        <div className="contentBx">
                            <h3>Table Lamp</h3>
                            <h2 className="price">$40.<small>99</small></h2>
                            <a href="https://google.com" className="buy">Buy Now</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Shop;