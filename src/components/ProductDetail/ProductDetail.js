import './ProductDetail.css';
import React from 'react';

function ProductDetail(props) {
    const { title, price, category, photo } = props;

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
        </div>
    )
}

export default ProductDetail; 