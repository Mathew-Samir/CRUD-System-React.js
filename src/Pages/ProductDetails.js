import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
let { productsid } = useParams();
const [product, setProduct] = useState();

useEffect(() => {
    fetch(`http://localhost:9000/posts/${productsid}`)
    .then(res => res.json())
    .then((product) => {
        setProduct(product);
    });
    }, [productsid]);

return (
    <>
        <h1>Title:</h1>
        {product && <h5>{product.title}</h5>}
        <hr />
        <h1>Description:</h1>
        {product && <h5>{product.description}</h5>}
        <hr />
        <h1>Price:</h1>
        {product && <h5>{product.price} $</h5>}
        <hr />
      {product && ( // Wrap image section in conditional rendering
        <>
            <h1>Image:</h1>
            <img src={product.image} alt="icons" />
        </>
        )}
        
    </>
);
};

export default ProductDetails;
