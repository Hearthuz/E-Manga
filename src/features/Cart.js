import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillDelete } from "react-icons/ai";
import Navbar from './Navbar';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import CartAccord from './Manga/CartAccord';
import axios from 'axios';

function Cart({ className }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getCart() {
            const manga = await axios.get(
                'http://localhost:8080/manga/'
            );
            setCart(manga.data);
        }
        getCart();
    }, []);

    return (
        <div className={className}>
            <Navbar />
            <div className="cart-container">
                <>
                    <div class="row d-flex py-2">
                        <h1 class="d-flex justify-content-center cart-header"><strong>CART LIST</strong></h1>
                        <div class="row d-flex py-2 bg-white rounded">
                            <Form>
                                <Accordion defaultActiveKey="{1}">
                                    <Accordion.Item eventKey="{1}">
                                        <Accordion.Header><div class="col-2"><input type="checkbox"></input></div><div class="col-10 accordionName">BookNameeeeeeeeeeee</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div class="col-12">Book Name</div>
                                            <div class="col-12 col-sm-6"><img src="https://cdn-local.mebmarket.com/meb/server1/162683/Thumbnail/book_detail_large.gif?2" class="book-cover img-fluid py-1"></img></div>
                                            <div class="col-12 col-sm-6">Price :100 Bath</div>
                                            <button type="button" class="btn btn-danger col-12"><AiFillDelete />Delete</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="{2}">
                                        <Accordion.Header><div class="col-2"><input type="checkbox"></input></div><div class="col-10 accordionName">BookNameeeeeeeeeeee</div></Accordion.Header>
                                        <Accordion.Body>
                                            <div class="col-12">Book Name</div>
                                            <div class="col-12 col-sm-6"><img src="https://cdn-local.mebmarket.com/meb/server1/162683/Thumbnail/book_detail_large.gif?2" class="book-cover img-fluid py-1"></img></div>
                                            <div class="col-12 col-sm-6">Price :100 Bath</div>
                                            <button type="button" class="btn btn-danger col-12"><AiFillDelete />Delete</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Form>
                        </div>
                    </div>
                </>
            </div>
        </div >

    )
}

Cart.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Cart)`
.cart-container{
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    justify-content: center;
    padding: 4rem;
}
.cart-header{
    color : white;
}
.accordionName{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
`