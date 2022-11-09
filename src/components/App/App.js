import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from '../static/Footer/Footer';
import Navbar from '../static/Navbar/Navbar';
import Home from '../pages/Home/Home';
import Camisetas from '../pages/Camisetas/Camisetas';
import Bones from '../pages/Bones/Bones';
import Acessorios from '../pages/Acessorios/Acessorios';
import CartContext from '../../contexts/CartContext'
import CheckoutPage from '../pages/Checkout/Checkout';
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
            <div style={{ minHeight: "100vh" }}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/camisetas' element={<Camisetas />} />
                <Route path='/bones' element={<Bones />} />
                <Route path='/acessorios' element={<Acessorios />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
}

export default App;
