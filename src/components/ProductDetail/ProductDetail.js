import './ProductDetail.css';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import CartContext from '../../contexts/CartContext';


function ProductDetail(props) {
    const { title, price, category, photo } = props;
    const [quant, setQuant] = useState(0);
    const [product, setProduct] = useState(null);

    function addProduct() {
        setQuant(quant+1);
    }

    function subProduct() {
        setQuant(quant-1);
    }

    return (
        <div className="ProductDetail">
            <div className="product">
                <h1 className="title-product">{title}</h1>
                <p className="category-product">{category}</p>
            </div>
            <div className="product-info">
                <img src={photo} alt='imagem produto' className="photo-product"></img>
                <h2 className="price-product">R$ {price.toFixed(2)}</h2>
            </div>
            <div className="quantidade">
                {/* <button className="button-quant" onClick={() => addProduct(product.quant)}>+</button>
                    <p className="num-quant">{product.quant}</p>
                <button className="button-quant" onClick={() => subProduct(product.quant)}>-</button> */}
            </div>
        </div>
    )
}

export default ProductDetail; 