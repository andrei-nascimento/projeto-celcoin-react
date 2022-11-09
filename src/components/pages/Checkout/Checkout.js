import { useContext, useState } from "react"
import CartContext from "../../../contexts/CartContext"

import "./Checkout.css";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert("Pedido Confirmado!");
        alert(`Será enviado para: ${name}`);
        alert(`No e-mail: ${email}`);
        alert(`Em: ${date}`);
        alert(`No endereço: ${address}`);
    }

    return (
        <div className="CheckOutPage">
            <div>
                <h1>Itens Selecionados</h1>
                <ul>
                    {cart.length > 0
                        ? cart.map(product => <li>{product.title} - R$ {product.price.toFixed(2)}</li>)
                        : "Não há itens selecionados"
                    }
                </ul>
            </div>
            <div>
                <h1>Endereço de entrega</h1>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome Completo: </label>
                <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <br />
                <label htmlFor="email">E-mail: </label>
                <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <br />
                <label htmlFor="date">Data de Nascimento: </label>
                <input name="date" type="text" value={date} onChange={(e) => setDate(e.target.value)}></input>
                <br />
                <label htmlFor="address">Endereço: </label>
                <input name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                <button type="submit" disabled={!address || !name}>Confirmar compra</button>
                </form>
            </div>
        </div>
    )
}