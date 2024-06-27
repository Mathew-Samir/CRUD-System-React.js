import React, { useState, useEffect } from 'react'
import './AddProducts.css'

const AddProducts = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [existingIds, setExistingIds] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch existing product IDs when the component mounts
    fetch('http://localhost:9000/posts')
      .then((res) => res.json())
      .then((data) => {
        const id = data.map(product => product.id);
        setExistingIds(id);
      });
  }, []);

  const formSubmit = (e) => {
    e.preventDefault();

    if (existingIds.includes(id)) {
      setError("This ID is duplicated. Please enter a non-duplicate ID.");
      return;
    }
    if (id === "") {
      setError("This ID is required.");
      return;
    }

    fetch('http://localhost:9000/posts', {
      method: 'POST',
      body: JSON.stringify({ id, title, description, price, image }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => { 
      console.log(data);
      // Update existing IDs with the new one
      setExistingIds([...existingIds, id]);
      setError(""); // Clear error on successful submission
    });
  };

  return (
    <>
      <h1>Add New Product</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">ID <b style={{color: "red"}}>*</b></label>
          <input 
            type="text" 
            className="form-control" 
            id="productId" 
            placeholder='Product ID (The ID must not be repeated)'
            onChange={(e) => setId(e.target.value)}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="productTitle" 
            placeholder='Product Title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="productDescription" 
            placeholder='Product Description'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="productPrice" 
            placeholder='Product Price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Image</label>
          <input 
            type="text" 
            className="form-control" 
            id="productImage" 
            placeholder='Product Image URL'
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}

export default AddProducts;

