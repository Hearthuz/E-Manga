import React from 'react'

import Navbar from './features/Navbar';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import Home from './features/Home';
import Login from './features/Login';
import ProductShow from './features/ProductShow';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />

            <Container>
                {/* <Login />
                <Home /> */}
                <ProductShow />
            </Container>
        </>
    )
}

export default App;