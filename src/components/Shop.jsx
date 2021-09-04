import React from 'react';
import './shop.css';
import Shopcard from './Shopcard';

const Shopsecdata = [
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#97ABA6"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#97ABA6"
    }
]

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
                    {Shopsecdata.map(function ncards(val){
                        return(
                            <Shopcard
                                name={val.name}
                                img={val.img}
                                pricea={val.pricea}
                                priceb={val.priceb}
                            />
                        )
                    })}
                </div>

            </div>
        </>
    );
}

export default Shop;