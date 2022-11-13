import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import axios from "axios";
import ProductDetail from '../../../components/ProductDetail/ProductDetail';
import CartContext from '../../../contexts/CartContext';
import './ProductPage.css';

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
        navigate("/products");
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
                <ProductDetail className='ProductPageItens'
                    photo={product.photo}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                /> :
                <div>Não há nada para exibir</div>
            }
            <div className="actions">
                <button onClick={handleBack} className="return"><KeyboardReturnIcon style={{ fontSize: 32 }}/></button>
                <button onClick={addProductOnCart} className="add-to-cart">{
                product && !isProductAlreadySelected() ? <>Adicionar</> : <>Remover</>
                }</button>
                <Link to="/checkout">
                <button className="link-cart">Finalizar Compra</button>
                </Link>
            </div>
        </div>
    )
}