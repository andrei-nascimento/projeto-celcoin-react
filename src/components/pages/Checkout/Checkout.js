import { useContext, useState } from "react"
import CartContext from "../../../contexts/CartContext"

import "./Checkout.css";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [quant, setQuant] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");

    function addProduct(id) {
        cart.forEach((product) => {
            if (product.id === id) {
                product.quant += 1
                setQuant(product.quant)
            }
        })
    }

    function subProduct(id) {
        cart.forEach((product) => {
            if (product.id === id) {
                product.quant -= 1
                setQuant(product.quant)
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Pedido Confirmado!");
    }

    return (
        <div className="CheckOutPage">
            <div className="resumo">
                <h1 className="items-titulo">Resumo da Compra</h1>
                <ul>
                    {cart.length > 0
                        ? cart.map(product => <li>{product.title} - R$ {product.price.toFixed(2)}</li>)
                        : "Não há itens selecionados"
                    }
                </ul>
            </div>
            <div className="items">
                <h1 className="items-titulo">Itens Selecionados</h1>
                {cart.map((product) => {
                    return (
                        <div key={product.id} className="items-detail">
                            <img src={product.photo} alt="imagem do produto" className="cart-photo"/>
                            <h2 className="item-titulo-h2">{product.title}</h2>
                            <p className="total">Total: R$ {parseInt(product.price * product.quant).toFixed(2).replace(".", ",")} </p>
                            <div className="quantidade">
                                <button className="button-quant" onClick={() => addProduct(product.id)}> + </button>
                                <p className="num-quant">{product.quant}</p>
                                <button className="button-quant" onClick={() => subProduct(product.id)} > - </button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="delivery">
                <h1 className="items-titulo">Dados para Entrega</h1>
                <div className="delivery-form">
                    <form onSubmit={handleSubmit} className='cart-form'>
                    <label htmlFor="name">Nome Completo: </label>
                    <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <br />
                    <label htmlFor="email">E-mail: </label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <br />
                    <label htmlFor="date">Data de Nascimento: </label>
                    <input name="date" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                    <br />
                    <label htmlFor="address">CEP: </label>
                    <input name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    <button type="submit" className="button-end" disabled={!address || !name}>Confirmar compra</button>
                    </form>
                </div>
            </div>
        </div>
    )
}