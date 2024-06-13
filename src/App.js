import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbars from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProducts from './Pages/AddProducts';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from './Pages/EditProduct';

function App() {
  return (
    <div className="App">
      <Navbars />
      <div className='row'>
        <div className='col-2 '>
          <Sidebar/>
        </div>
        <div className='col-10'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/add' element={<AddProducts />} />
              <Route path='/products/:productsid' element={<ProductDetails/>} />
              <Route path='/products/edit/:id' element={< EditProduct/>} />
            </Routes>
        </div>
      </div>
      </div>
  );
}

export default App;
