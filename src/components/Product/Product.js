import { useNavigate } from "react-router-dom";
import "./Product.css";

function Product(props) {
    const { id, title, photo, category, price, selected } = props;
    const navigate = useNavigate();

    function handleSelect() {
        navigate(`/products/${id}`);
    }

    return (
        <div className="Product">
            <div className={selected ? "product selected" : "product"} onClick={handleSelect}>
                <img src={photo} alt="Product test" className="photo"/>
                <p className="title">{title}</p>
                <p className="category">{category}</p>
                <p className="price">R$ {price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Product;