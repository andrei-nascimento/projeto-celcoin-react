import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import './Menu.css'

function Menu() {
    return(
        <div className='menu-nav'>
            <div className="camisetas">
                <Link to='/camisetas' className='link'>
                    <Typography className='menu-text-nav'>Camisetas</Typography>
                </Link>
            </div>
            <div className="bones">
                <Link to='/bones' className='link'>
                    <Typography className='menu-text-nav'>Bonés</Typography>
                </Link>
            </div>
            <div className="bones">
                <Link to='acessorios' className='link'>
                    <Typography className='menu-text-nav'>Acessórios</Typography>
                </Link>
            </div>
        </div>
    )
}

export default Menu;