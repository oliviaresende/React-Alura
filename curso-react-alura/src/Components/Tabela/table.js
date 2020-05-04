import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'

const CellDeleta = ({ removeDado, id }) => {
    if (!removeDado) {
        return null
    }
    return (
        <TableCell align='center'>
            < Button
                variant='contained'
                color='primary'
                onClick={() => { removeDado(id) }}
            >
                Remover
                </Button >
        </TableCell >
    )
}
const TituloDeleta = ({removeDado}) => {
    if (!removeDado) {
        return null
    }
    return <TableCell align='center'>Remover</TableCell>
}
const Tabela = props => {
    const { campos, dados, removeDado } = props

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        campos.map((campo) => (
                            <TableCell align='center' key={campo.titulo}>{campo.titulo}</TableCell>
                        ))
                    }
                    <TituloDeleta removeDado={removeDado} />
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map((dado) => (
                        <TableRow key={dado.id}>
                            {
                                campos.map(campo => (
                                    <TableCell align='center' key={campo.campo}>{dado[campo.campo]}</TableCell>
                                ))
                            }
                            <CellDeleta id={dado.id} removeDado={removeDado} />
                        </TableRow>))
                }
            </TableBody>
        </Table>
    )
}


export default Tabela