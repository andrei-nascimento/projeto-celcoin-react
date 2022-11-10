import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Menu.css'

function Menu() {
    return(
        <div className='menu-nav'>
            <Link to='/products' className='link'>
                <Typography className='menu-text-nav'>Produtos</Typography>
            </Link>
        </div>
    )
}

export default Menu;