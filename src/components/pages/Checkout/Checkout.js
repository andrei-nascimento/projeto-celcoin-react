import { useContext, useState } from "react"
import CartContext from "../../../contexts/CartContext"
import "./Checkout.css";
import { useForm } from "react-hook-form";

export default function CheckoutPage() {
    const { cart } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const { register, handleSubmit, setValue, setFocus } = useForm();

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, "");
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf); 
            setFocus('addressNumber');
        });
    };

    function done() {
        alert("Pedido Confirmado!");
    }

    return (
        <div className="CheckOutPage">
            <div className="items">
                <h1 className="items-titulo">Itens Selecionados</h1>
                <ul>
                    {cart.length > 0
                        ? cart.map(product => <div key={product.id} className="items-detail">
                        <img src={product.photo} alt="imagem do produto" className="cart-photo"/>
                        <h2 className="item-titulo-h2">{product.title}</h2>
                        <p className="total">Total: R$ {parseInt(product.price).toFixed(2).replace(".", ",")}</p>
                    </div>)
                        : "Não há itens selecionados"
                    }
                </ul>
                {cart.map((product) => {
                    
                })}
            </div>
            <div className="delivery">
                <h1 className="items-titulo">Dados para Entrega</h1>
                <div className="delivery-form">
                    <form onSubmit={handleSubmit} className='cart-form'>
                    <label className="label-cart">
                        Nome Completo:
                        <input type="text" className="input-cart"/>
                    </label>
                    
                    <label className="label-cart">
                        E-mail:
                        <input type="text" className="input-cart"/>
                    </label>
                    
                    <label className="label-cart">
                        Data de nascimento:
                        <input type="text" className="input-cart"/>
                    </label>
                    
                    <label className="label-cart">
                        CEP:<br />
                        <input type="text" {...register("cep")} onBlur={checkCEP} className="input-cart"/>
                    </label>
                    <label className="label-cart">
                        Rua:
                        <input type="text" {...register("address")} className="input-cart"/>
                    </label>
                    <label className="label-cart">
                        Numero:
                        <input type="text" {...register("addressNumber")} className="input-cart"/>
                    </label>
                    <label className="label-cart">
                        Bairro:
                        <input type="text" {...register("neighborhood")} className="input-cart"/>
                    </label >
                    <label className="label-cart">
                        Cidade:
                        <input type="text" {...register("city")} className="input-cart"/>
                    </label>
                    <label className="label-cart">
                        Estado:
                        <input type="text" {...register("uf")} className="input-cart"/>
                    </label >
                    <button type="submit" className="button-end" onClick={() => done()}>Confirmar compra</button>
                    </form>
                </div>
            </div>
        </div>
    )
}