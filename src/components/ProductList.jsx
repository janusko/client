import React from 'react'

const ProductList = (props) => {
    return (
        <div>
            <h1>All Products</h1>
            {props.product.map ( (product, i) => 
            <a href key={i}>{product.id}</a>
            )}
        </div>
    )
}

export default ProductList