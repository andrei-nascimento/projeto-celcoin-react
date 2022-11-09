import { Typography } from "@material-ui/core";
import './Menu.css'

function Menu() {
    return(
        <div className='menu-nav'>
            <div className="camisetas">
                <Typography className='menu-text-nav'>Camisetas</Typography>
            </div>
            <div className="bones">
                <Typography className='menu-text-nav'>Bonés</Typography>
            </div>
            <div className="bones">
                <Typography className='menu-text-nav'>Acessórios</Typography>
            </div>
        </div>
    )
}

export default Menu;