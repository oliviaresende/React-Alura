import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'
import Header from '../../Components/Header/Header'
import Table from '../../Components/Tabela/table'
import ApiService from '../../Utils/ApiService'
import Toast from '../../Components/Toast/Toast'

class Autores extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nomes: [],
            mensagem: {
                open: false,
                texto: '',
                tipo: ''
            }
        }
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success') {
                    this.setState({
                        nomes: [...this.state.nomes, ...res.data],
                        mensagem: {
                            open: true,
                            texto: "Autores listados com sucesso",
                            tipo: 'success'
                        }
                    })
                }
            })
            .catch(() => {
                this.setState({
                    mensagem: {
                        open: true,
                        texto: "Falha na comunicação com a API ao listar os autores",
                        tipo: 'error'
                    }
                })
            })
    }
    handleClose = () => this.setState({ mensagem: { open: false } })

    render() {
        const campos = [{ titulo: 'Autores', campo: 'nome' }]
        return (
            <>
                <Toast open={this.state.mensagem.open} handleClose={this.handleClose} severity={this.state.mensagem.tipo} onClose={() => this.setState({ open: false })} >{this.state.mensagem.texto}</Toast>
                <Header />
                <Typography variant='h2' component='h2' color='primary' align='center' >Página de Autores</Typography>
                <Container maxWidth="xs">
                    <Typography component="div" style={{ textAlign: 'center' }}>
                        <Table dados={this.state.nomes} campos={campos} />
                    </Typography>
                </Container>
            </>
        );
    }

}
export default Autores