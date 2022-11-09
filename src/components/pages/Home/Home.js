import './Home.css';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import background from '../../../assets/background.jpg';
import selecao from '../../../assets/selecao.jpg';
import arrow from '../../../assets/arrow.png';
import { Link } from "react-router-dom";
import React from 'react';

function Home() {
    
    return(
        <Grid container className='container-home'>
            <Grid item xs={12}>
                <div style={{ backgroundImage: `url(${background})` }} className='img-home'>
                    <Typography className='title-background'>
                        Mais do que um esporte, um estilo de vida.
                    </Typography>
                    <Box className='button-background'>
                        <a href='#anchor' className='link'><Button className='button-text' >
                            Confira
                        </Button></a>
                    </Box>
                    <Box className='arrow-box'>
                        <img src={arrow} alt="arrow" className='arrow' />
                    </Box>
                </div>
            </Grid>
            <Grid item xs={6} className='menu-left'>
                <Box className='central'>
                    <Typography className='menu-text'>Na Futbola você encontra tudo o que precisa para torcer para seu clube do coração 
                    </Typography>
                    <Box className='button-box-menu'>
                        <Link to='/categorias' className='link'>
                            <Button className='button-menu'>
                                Nossos produtos
                            </Button>
                        </Link>
                    </Box>
                    <Typography className='menu-text-2'>Aproveite o lançamento da <strong>nova camiseta da seleção brasileira</strong> na Copa do Mundo 2022. São diversas cores e modelos para toda família vibrar junto!  
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}  className='menu-right'>
                <img src={selecao} alt="camiseta-selecao" className='selecao'/>
            </Grid>
            <div id="anchor"></div>
        </Grid>
    )
}

export default Home;