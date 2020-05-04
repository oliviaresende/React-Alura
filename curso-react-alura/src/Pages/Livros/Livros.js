import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Tabela/table'
import ApiService from '../../Utils/ApiService'
import Toast from '../../Components/Toast/Toast'

class Livros extends Component {
    constructor(props) {
        super(props)

        this.state = {
            livros: [],
            mensagem: {
                open: false,
                texto: '',
                tipo: ''
            }
        }
    }

    componentDidMount() {
        ApiService.ListaLivros()
            .then(res => {
                if (res.message === 'success') {
                    this.setState({
                        livros: [...this.state.livros, ...res.data],
                        mensagem: {
                            open: true,
                            texto: "Livros listados com sucesso'",
                            tipo: 'success'
                        }
                    })
                }
            })
            .catch( () => {
                this.setState({
                    mensagem: {
                        open: true,
                        texto: "Falha na comunicação com a API ao listar os livros",
                        tipo: 'error'
                    }
                })
            })
    }
    handleClose = () => this.setState({ mensagem: { open: false } })

    render() {
        const campos = [{ titulo: 'Livros', campo: 'livro' }]
        return (
            <>
                <Toast open={this.state.mensagem.open} handleClose={this.handleClose} severity={this.state.mensagem.tipo} onClose={() => this.setState({ open: false })}>{this.state.mensagem.texto}</Toast>
                <Header />
                <Typography variant='h2' component='h2' color='primary' align='center' >Página de Livros</Typography>
                <Container maxWidth="xs">
                    <Typography component="div" style={{ textAlign: 'center' }}>
                        <Table dados={this.state.livros} campos={campos} />
                    </Typography>
                </Container>
            </>
        )
    }
}

export default Livros
