import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [product]);
    // allows us to view changes without reloading with [products]

    return (
        <div>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={'/product/' + product._id + '/edit'}>Edit</Link>
            <Link to={'/product/'}>Home</Link>

        </div>
    )
}

export default Detail;