import { useState, useEffect, useContext } from "react";
import axios from "axios";

import "./Products.css";
//import Loading from "../../assets/loading.gif";

import Product from "../Product";
import CartContext from "../../contexts/CartContext";

function Products() {
    const [productsList, setProductsList] = useState(null);
    const { cart } = useContext(CartContext);

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`);
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
                key={product.title}
                id={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                selected={cart.find(productOnCart => productOnCart.id === product.id)}
            />
        )
        })
    }

    const products = buildProductsList();
    return (
        <div className="Products">
            {products}
        </div>
    )
}

export default Products;