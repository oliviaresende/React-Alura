import React from 'react'
import { Typography } from '@material-ui/core'
import Header from '../../Components/Header/Header'

const NotFound = () =>{

    return (
        <>
            <Header />
            <Typography variant='h2' component='h2' color='primary' align='center' >Página Não Encontrada</Typography>
        </> 
    );
}

export default NotFound