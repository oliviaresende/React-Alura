import React from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core'

const Header = () => (

    <AppBar position="static">
        <Tabs
            variant="fullWidth"
            aria-label="nav tabs example"
            orientation="horizontal"
            value={window.location.pathname}
        >
            <Tab component="a" label="Casa do Código" href="/" value="/" tabIndex={1} />
            <Tab component="a" label="Autores" href="/autores" value="/autores" tabIndex={2} />
            <Tab component="a" label="Livros" href="/livros" value="/livros" tabIndex={3} />
            <Tab component="a" label="Sobre" href="/sobre" value="/sobre" tabIndex={4} />
        </Tabs>
    </AppBar>

)

export default Header