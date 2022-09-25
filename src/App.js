import React from 'react'
import { Routes, Route } from 'react-router-dom';

import GlobalStyle from './features/GlobalStyle';
import Home from './features/Home';
import Login from './features/Login';
import Manga from './features/Manga';
import Favorite from './features/Favorite';
import Register from './features/Register';
import ProductShow from './features/ProductShow';
import Notification from './features/Notification';
import Cart from './features/Cart';
import BookArchive from './features/BookArchive';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/register" element={<Register />} />
                <Route path="/productShow" element={<ProductShow />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/BookArchive" element={<BookArchive />} />
            </Routes>
        </>
    )
}

export default App;