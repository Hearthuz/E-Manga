import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';
import CartManga from './CartManga';

function Cart({ className }) {
    const [cart, setCart] = useState([]);
    const userId = localStorage.getItem("token");

    useEffect(() => {
        async function getCart() {
            const manga = await axios.get(
                `http://localhost:8080/users/${userId[7]}`
            );
            setCart(manga.data.cart);
        }
        getCart();
    }, []);


    return (
        <div className={className}>
            <Navbar />
            <div class="cart-container">
                <div>
                    <h1 class="row header py-5 fw-bolder d-flex justify-content-center">Cart Lists</h1>
                    <div class="row dataBlock py-10 px-1 d-flex justify-content-center bg-white rounded">
                        {
                            cart.map((result) =>
                                <CartManga key={result.key} item={result}></CartManga>
                            )
                        }
                    </div>
                    <div class="row">
                        <div class="d-flex py-2 px-4"><input type={'checkbox'}></input><span class="px-2 selectAll">Select All</span></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Cart.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Cart)`
.cart-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
}
    .header{
        color : #f5f5f5;
        font-size : 4rem;
    }
    .dataBlock{
        width : 50rem;
        overflow : auto;
    }
    .cart-Item{
    }
    input {
        height: 2rem;
        width: 2rem;
        background-color: #eee;
    }
    .bookCover {
        width: 100%;
    }
    .checkBoxCol{
        height :100%;
    }
    .delBtnCol{
        height :100%;
    }
    .selectAll{
        font-size :1.5rem;
        color : #eeeeee;
    }
`