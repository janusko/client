import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default (props) => {
    const { initialName, initialPrice, initialDescription, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name, price, description});
        // values below
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}