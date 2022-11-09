import React from 'react';
import './Navbar.css';
import { AppBar, Box, Grid, Toolbar, Typography } from '@material-ui/core';
import logo from '../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import CustomizedMenus from '../Menu/Menu';


function Navbar() {

    let navigate = useNavigate();
    let navbarComponent;

    navbarComponent = <AppBar position="static" className='navbar'>
    <Toolbar className='toolbar'>
        <Grid className='principal' onClick={() => {navigate('/home')}}>
            <img src={logo} alt="logo" className='navbar-logo' />
            <Box className='menu'>
                <Box>
                    <Typography className='titulo-nav'>
                        Futbola
                    </Typography>
                </Box>
            </Box>
        </Grid>
        <Box>
            <CustomizedMenus />
        </Box>
    </Toolbar>
    </AppBar>

    return(
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;