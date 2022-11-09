import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import ProductDetail from '../../ProductDetail';

import CartContext from '../../../contexts/CartContext';

export default function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL;
        const promise = axios.get(`${url}/products/${params.productId}`);
        promise.then(response => setProduct(response.data));
        promise.catch(error => console.log("error", error));
    }, []);

    function handleBack() {
        navigate("/");
    }

    function addProductOnCart() {
        if (isProductAlreadySelected()) {
            const newProductList = removeProductFromCart();
            setCart(newProductList);
        } else {
            setCart([...cart, product]);
        }
    }

    function removeProductFromCart() {
        return cart.filter(productOnCart => product.id !== productOnCart.id);
    }

    function isProductAlreadySelected() {
        return cart.find(productOnCart => product.id === productOnCart.id);
    }

    return (
        <div className="ProductPage">
            {
                product ?
                <ProductDetail
                    title={product.title}
                    description={product.description}
                    price={product.price}
                /> :
                <div>Não há nada para exibir</div>
            }
            <div className="actions">
                <button onClick={handleBack}>Voltar</button>
                <button onClick={addProductOnCart}>{
                product && !isProductAlreadySelected() ? <>Selecionar</> : <>Remover</>
                }</button>
            </div>
        </div>
    )
}