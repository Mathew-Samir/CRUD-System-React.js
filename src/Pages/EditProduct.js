import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddProducts.css';
//import Products from './Products';

const EditProduct = () => {
  let { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    // Fetch the existing product details
    fetch(`http://localhost:9000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setImage(data.image);
      })
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  const formSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, price, image })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Optionally, redirect or inform the user of success
      })
      .catch((error) => console.error('Error updating product:', error));
  }

  return (
    <>
      <h1>Edit Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            id="productImage"
            placeholder="Product Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default EditProduct;
