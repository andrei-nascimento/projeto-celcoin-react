import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
