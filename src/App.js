import React from 'react'

import Navbar from './features/Navbar';
import GlobalStyle from './features/GlobalStyle';
import Container from './features/Container';
import Home from './features/Home';
import Login from './features/Login';
import ProductShow from './features/ProductShow';
import Cart from './features/Cart';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />

            <Container>
                {/* <Login /> */}
                {/* <Home /> */}
                {/* <ProductShow /> */}
                <Cart />
            </Container>
        </>
    )
}

export default App;