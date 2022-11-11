import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../static/Footer/Footer';
import Navbar from '../static/Navbar/Navbar';
import Home from '../pages/Home/Home';
import CartContext from '../../contexts/CartContext'
import CheckoutPage from '../pages/Checkout/Checkout';
import { useState } from 'react';
import ProductPage from '../pages/ProductPage/ProductPage';
import Products from '../Products/Products';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path="/products/:productId" element={<ProductPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
