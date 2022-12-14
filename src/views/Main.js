import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProduct((prevState) => [...prevState, res.data]);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialName='' initialPrice='' initialDescription='' />
            <hr />
            {loaded && <ProductList />}
        </div>
    );
}

export default Main;