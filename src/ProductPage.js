import React from "react";
import Product from "./ProductDetails";
const ProductPage = () => {
    const productList = [
        { id: 1, name: 'Dell', price: 20000, description: 'RAM 8GB, Storage 1TB' },
        { id: 2, name: 'Lenovo', price: 25000, description: 'RAM 12GB, Storage 1TB' },
        { id: 3, name: 'HP', price: 27000, description: 'RAM 16GB, Storage 512GB' }
    ]
    const dFlex = {display:'flex'}
    return (
        <div>
            <h1>Product List</h1>
            <div style={dFlex}>
                {
                    productList.map((product) => {
                        return <Product data={product} key={product.id} />
                    })
                }
            </div>
            {/* <Product data={productList[0]}/>
        <Product data={productList[1]}/>
        <Product data={productList[2]}/> */}
        </div>
    )




}
export default ProductPage;