import { useContext } from "react";

import Products from "../../Products";
import CashRegister from "../../CashRegister";
import ShoppingContext from "../../../contexts/CartContext";

function ProductsPage() {

    const { cart } = useContext(ShoppingContext);

    function getTotalFromProducts() {
        return cart.reduce((acc, current) => {
            return acc += current.price;
        }, 0)
    }

    return (
        <main>
            <Products />
            <CashRegister total={getTotalFromProducts()} />
        </main>
    )
}

export default ProductsPage;