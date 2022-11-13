import { Icon, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Menu.css'

function Menu() {
    return(
        <div className="display-nav">
            <div className='menu-nav'>
                <Link to='/products' className='link'>
                    <Typography className='menu-text-nav'>Produtos</Typography>
                </Link>
                <Link to='/checkout' className='link'>
                    <Icon className='menu-icon'><ShoppingCartIcon /></Icon>
                </Link>
            </div>
        </div>
    )
}

export default Menu;