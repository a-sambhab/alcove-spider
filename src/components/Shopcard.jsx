import React from 'react';

const Shopcard = (props) => {
    return(
        <>
            <div style={{background:props.back}} className="shopcard">
                <div className="imgBx">
                    <img alt="shopimg" src={props.img}/>
                </div>
                <div className="contentBx">
                    <h3>{props.name}</h3>
                    <h2 className="price">{props.pricea}<small>{props.priceb}</small></h2>
                    <a href="https://google.com" className="buy">Buy Now</a>
                </div>
            </div>
        </>
    );
}

export default Shopcard;