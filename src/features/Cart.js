import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';
import CartAccord from './Manga/CartAccord';
import { AiFillDelete } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import CartManga from './CartManga';

function Cart({ className }) {
    const [cart, setCart] = useState([]);
    const userId = localStorage.getItem("token");
    const [totalPay, setTotalPay] = useState();

    useEffect(() => {
        async function getCart() {
            const manga = await axios.get(
                `http://localhost:8080/users/${userId[7]}`
            );
            setCart(manga.data.cart);
        }
        getCart();
    }, []);

    // let sum = 0;
    function getPrice() {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            console.log(cart[i].price);
            sum = sum + cart[i].price;
        }
        return (sum)
    }

    const totalPrice = getPrice();
    console.log(totalPrice);
    return (
        <div className={className}>
            <Navbar />
            <div class="cart-container">
                <>
                    <div class="row d-flex py-2">
                        <h1 class="d-flex justify-content-center cart-header"><strong>CART LIST</strong></h1>
                        <div class="row d-flex py-2 bg-white rounded">
                            <Form>
                                <Accordion defaultActiveKey="{1}">
                                    {
                                        cart.map((result) =>
                                            <CartManga key={result.key} item={result}></CartManga>
                                        )
                                    }
                                </Accordion>
                                <div class="row">
                                    <div class="d-flex justify-content-center">
                                        <span class="totalHead">Total Payment</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="d-flex justify-content-center">

                                        <span class="totalPayText">{totalPrice} ฿</span>
                                    </div>
                                </div>
                                <div class="row py-3">
                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-outline-success">Check it Out!</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </>
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
    .cart-header{
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
    .totalHead{
        font-size : 1.5rem;
        font-weight : bold;
    }
    .totalPayText{
        font-size : 3rem;
    }
`