import React, { Component } from 'react'
import { Container, Typography } from '@material-ui/core'
import Tabela from '../../Components/Tabela/table'
import Formulario from '../../Components/Formulario/Formulario'
import Header from '../../Components/Header/Header'
import ApiService from '../../Utils/ApiService'
import Toast from '../../Components/Toast/Toast'
import './Home.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autores: [],
      mensagem: {
        open: false,
        texto: '',
        tipo: ''
      }
    }
  }

  removeAutor = id => {
    const { autores } = this.state

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id
    })
    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({
            autores: [...autoresAtualizado],
            mensagem: {
              open: true,
              texto: "Autor removido com sucesso",
              tipo: 'success'
            }
          })
        }
      })
      .catch(
        this.setState({
          mensagem: {
            open: true,
            texto: "Erro na comunicação com a API ao tentar remover o autor",
            tipo: 'error'
          }
        })
      )
  }

  escutadorDeSubmit = dados => {
    const autor = {
      nome: dados.nome,
      livro: dados.livro,
      preco: dados.preco
    }
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => {
        if (res.message === 'success') {
          this.setState({
            autores: [...this.state.autores, autor],
            mensagem: {
              open: true,
              texto: "Autor adicionado com sucesso",
              tipo: 'success'
            }
          })
        }
      })
      .catch( () => {
        this.setState({
          mensagem: {
            open: true,
            texto: "Erro na comunicação com a API ao tentar remover o autor",
            tipo: 'error'
          }
        })
      })
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, ...res.data] })
        }
      })
      .catch( () => {
        this.setState({
          mensagem: {
            open: true,
            texto: "Erro na comunicação com a API ao tentar listar os autores",
            tipo: 'error'
          }
        })
      })
  }
  handleClose = () => this.setState({ mensagem: { open: false } })
  render() {
  
    const campos = [
      { titulo: 'Autores', campo: 'nome' },
      { titulo: 'Livros', campo: 'livro' },
      { titulo: 'Preço', campo: 'preco' },
    ]
    return (
      <>
        <Toast open={this.state.mensagem.open} handleClose={this.handleClose} severity={this.state.mensagem.tipo} onClose={() => this.setState({ open: false })} >{this.state.mensagem.texto}</Toast>
        <Header />
        <Container maxWidth='md'>
          <Typography variant='h2' component='h2' color='primary' >Casa do Código</Typography>
          <Formulario escutadorDeSubmit={this.escutadorDeSubmit} />
          <Tabela campos={campos} dados={this.state.autores} removeDado={this.removeAutor} />
        </Container>
      </>
    )
  }
}

export default App
