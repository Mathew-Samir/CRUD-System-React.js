import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Products.css';

const Products = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = () => {
    fetch('http://localhost:9000/posts')
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setproducts(data)
      })
  }

  

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you sure you want to delete this product ${product.title}?`,
      showCancelButton: true
    }).then((data) => {
      if (data.isConfirmed) {
      fetch(`http://localhost:9000/posts/${product.id}`, { method: 'DELETE', })
      .then((res) => res.json())
      .then((data) => { getAllProducts(); })
      }
    })
  }
  return (
    <>
      <h1>Products</h1>
      <Link to={'/products/add'} className='btn btn-success mt-3'>Add New Product</Link>

      <table className="table table-success table-striped mt-5 table-bordered">
        <thead>
          <tr>
            <th className='col-1'>Number</th>
            <th className='col-1'>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th className='col-2'>Operations</th>
          </tr>
        </thead>
        <tbody>
        
        
          {products.map((product , index) => {
            
            return (
              
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description.slice(0, 60)}...</td>
                <td>{product.price}$</td>
                <td><img src={product.image} alt="icons" /></td>
                <td>
                  <button className='btn btn-danger btn-sm m-1' onClick={() => deleteProduct(product)}>Delete</button>
                  <Link to={`/products/${product.id}`} className='btn btn-primary btn-sm m-1'>View</Link>
                  <Link to={`/products/edit/${product.id}`} className='btn btn-success btn-sm m-1'>Edit</Link>
                </td>
              </tr>
              );
            })}
        </tbody>
      </table>
    </>
  )
}

export default Products