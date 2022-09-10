import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = (props) => {

    const { removeFromDom } = props;
    const navigate = useNavigate();


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.error(err));
            navigate('/product/')
    }

    return (
        <div>
            <h1>All Products</h1>
            {props.people.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}, {product.price}, {product.description}
                    </Link>
                    |
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default ProductList