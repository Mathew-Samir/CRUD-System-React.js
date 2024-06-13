import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
return (
    <>
        
        <ul className='list-unstyled sidebar'>
            <li>
                <Link to={"/products"}> Get All Products</Link>
            </li>
            <li>
                <Link to={"/"}> Get All Categoris</Link>
            </li>
        </ul>
        
        
    </>
)
}

export default Sidebar