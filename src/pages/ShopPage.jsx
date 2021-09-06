import React from 'react';
import Shopcard from '../components/Shopcard';
import "./shoppage.css"

const Lightdata = [
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    }
]

const Furniture = [
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#32564C"
    }
]
const Decordata = [
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
    },
    {
        name:"Table Lamp",
        img:"https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630519652/alcove/e7baf979310c78231e1ca85583c5ffc1-removebg-preview_djs16p.png",
        pricea:"$40.",
        priceb:"99",
        back:"#97ABA6"
    }
]

const ShopPage = () => {
    return(
        <>
            <div className="shoplanding">
                <div className="shoplandhead">
                    <h1>shop</h1>
                </div>
                <div className="shoplandimg">
                    <img alt="shopland" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630352710/alcove/landing_2_mtdftd.jpg"/>
                </div>
            </div>
                <div className="lightprods">
                    <div className="shoplandhead">
                        <h1>Light Products</h1>
                    </div>
                    <div className="lightsec">
                        {Lightdata.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="decorprods">
                    <div className="shoplandhead">
                        <h1>Decor Products</h1>
                    </div>
                    <div className="decorsec">
                        {Decordata.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="furniture">
                    <div className="shoplandhead">
                        <h1>Furniture</h1>
                    </div>
                    <div className="furnsec">
                        {Furniture.map(function ncards(val){
                            return(
                                <Shopcard
                                    name={val.name}
                                    img={val.img}
                                    pricea={val.pricea}
                                    priceb={val.priceb}
                                    back={val.back}
                                />
                            )
                        })}
                    </div>
                </div>
        </>
    );
};

export default ShopPage;