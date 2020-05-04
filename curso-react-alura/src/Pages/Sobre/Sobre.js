import React from 'react'
import Header from '../../Components/Header/Header'
import { Typography, Container } from '@material-ui/core'

const Sobre = () => {
    return (
        <>
            <Header />
            <Container maxWidth='sm'>
                <Typography variant='h2' component='h2' align='center' color='primary'>Sobre</Typography>
                <Typography variant='body1' component='p'>
                    A Casa do Código é uma editora que desenvolve e edita livros em diversos formatos.
                </Typography>
            </Container>
        </>
    );
}

export default Sobre