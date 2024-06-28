import React, { useState } from "react";
import ProductList from "./ProductList";
const DashboardPage =(props)=>{
    const mockProducts = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' },
        { id: 5, name: 'Product E' },
      ];
const [products] = useState(mockProducts) ;
const [searchTerm, setSearchTerm] =useState('');  

function handleFilter(){
 const value = document.getElementById("search-input").value;
 setSearchTerm(value)
}
return(
    <div>
        <input type="text" id="search-input" />
        <button onClick={handleFilter}>Search</button>
        
        <ProductList products={products} searchTerm={searchTerm}>
        
        </ProductList>

    </div>
);
} 
export default DashboardPage;