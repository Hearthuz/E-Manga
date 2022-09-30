import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';
import CartAccord from './Manga/CartAccord';
import { AiFillDelete } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';

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
            <>
                <div class="row d-flex py-2">
                    <h1 class="d-flex justify-content-center cart-header"><strong>CART LIST</strong></h1>
                    <div class="row d-flex py-2 bg-white rounded">
                        <Form>
                            <Accordion defaultActiveKey="{1}">
                                {
                                    cart.map((result) =>
                                        <CartAccord key={result.key} item={result}></CartAccord>
                                    )
                                }
                            </Accordion>
                        </Form>
                    </div>
                </div>
            </>
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