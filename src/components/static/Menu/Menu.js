import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Menu.css'

function Menu() {
    return(
        <div className="display-nav">
            <div className='menu-nav'>
                <Link to='/products' className='link'>
                    <Typography className='menu-text-nav'>Produtos</Typography>
                </Link>
                <Link to='/checkout' className='link'>
                    <Typography className='menu-text-nav'>Checkout</Typography>
                </Link>
            </div>
        </div>
    )
}

export default Menu;