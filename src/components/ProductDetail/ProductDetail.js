function ProductDetail(props) {
    const { title, price, description } = props;

    return (
        <div className="ProductDetail">
            <div className="product">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>R$ {price.toFixed(2)}</h3>
            </div>
        </div>
    )
}

export default ProductDetail; 