import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList(props) {
    return (
        <div className="productList">
            {props.products.map((item) => (
                <ProductItem key={item.id} product={item} />
            ))}
        </div>
    );
}

export default ProductList;