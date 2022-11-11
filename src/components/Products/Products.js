import { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./Products.css";
import Loading from "../../assets/loading.gif";

import Product from "../Product/Product";
import CartContext from "../../contexts/CartContext";

function Products() {
    const [productsList, setProductsList] = useState(null);
    const { cart } = useContext(CartContext);
    const [ busca, setBusca ] = useState('');

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);
        promise.then(response => {
            setProductsList(response.data);
        });
        promise.catch(e => {
            console.log("Erro na requisição!", e);
        })
    }, [])

    function buildProductsList() {
        if (productsList === null) {
            return <img src={Loading} alt="loading" />
        }

        return productsList.map(product => {
        return (
            <Product
                id={product.id}
                title={product.title}
                photo={product.photo}
                category={product.category}
                price={product.price}
                selected={cart.find(productOnCart => productOnCart.id === product.id)}
            />
        )
        })
    }

    const products = buildProductsList();
    
    return (
        <>
            <div className="busca">
                <label className="busca-text">Pesquisar:
                <input type="text" className="busca-input" value={busca} onChange={(e) => setBusca(e.target.value)}/>
                </label>
            </div>
            <div className="Products">
                {products}
            </div>
        </>
    )
}

export default Products;