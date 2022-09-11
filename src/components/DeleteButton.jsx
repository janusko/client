import React from 'react'
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
    
export default props => {
    
    const { productId, successCallback } = props;
    // const navigate = useNavigate();
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res=>{
                successCallback();
                // navigate('/product')
            })
    }
    
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}