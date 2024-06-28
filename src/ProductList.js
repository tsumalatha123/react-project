import React from "react";
import Product from "./ProductDetails";
import DashboardPage from "./Dashboard";
const ProductList = ({products, searchTerm}) => {
    
    const dFlex = {display:'flex'};
    console.log(products);
    products = products.filter(product=> product.name.toLowerCase().includes(searchTerm.toLowerCase()));
   
    const NotFound =() => {
        if (products.length==0) {
            return <div>No Matches for {searchTerm}</div>
        } else {
            return;
        }
    }

    return (
        <div>
            <h1>Product List</h1>
            <div >
                {products.map((product)=>{
                    return <div key={product.id}>
                    {  product.name }
                    </div>
                })}
            </div>
            <div >
                <NotFound />
            </div>


            
        </div>
    )




}
export default ProductList;