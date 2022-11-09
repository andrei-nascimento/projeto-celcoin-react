import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/static/Footer/Footer';
import Navbar from './components/static/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
