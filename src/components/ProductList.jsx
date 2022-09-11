import React, { useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const {removeFromDom } = props
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => setProduct(res.data))
    }, [product])

    return (
        <div>
            <h1>All Products</h1>
            {product.map ( (product, i) => 
            <p key={i}>
                <Link to={(`/product/${product._id}`)} >  {product.name}</Link>
                |
                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
            </p>
            )}
        </div>
    )
}

export default ProductList