import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product(props) {
    const { id, title, description, price, selected } = props;
    const navigate = useNavigate();

    function handleSelect() {
        navigate(`/products/${id}`);
    }

    return (
        <div className="Product">
            <div className={selected ? "product selected" : "product"} onClick={handleSelect}>
                <img src="https://via.placeholder.com/150" alt="Product test" />
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="price">R$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Product;