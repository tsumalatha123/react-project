import React from "react";
import './productDetails.css'

function Product (props){

    return <div className="product">
        <div > Name: {props.data.name}</div>
        <div> Price: {props.data.price}</div>
        <div> Description: {props.data.description}</div>
    </div>
}

export default Product;