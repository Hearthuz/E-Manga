import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillDelete } from "react-icons/ai";
import Navbar from './Navbar';

function Cart({ className }) {
    return (
        <div className={className}>
            <Navbar />
            <div class="cart-container">
                <div>
                    <h1 class="row header py-5 fw-bolder d-flex justify-content-center">Cart Lists</h1>
                    <div class="row dataBlock py-10 px-1 d-flex justify-content-center bg-white">
                        <div class="row py-2 cart-Item border border-start-0 border-end-0 border-dark">
                            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                            <div class="col-2 px-0"><img class="bookCover" src="https://m.media-amazon.com/images/I/51QWSFImgvL.jpg" /></div>
                            <div class="col-7">
                                <div class="row">
                                    <span class="bookName fw-bolder">Attack On Titan 1</span>
                                </div>
                                <div class="row">
                                    <span class="price">69 ฿</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="delBtnCol d-flex align-items-center">
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-outline-dark"><AiFillDelete />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-2 cart-Item border border-start-0 border-end-0 border-dark">
                            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                            <div class="col-2 px-0"><img class="bookCover" src="https://images-na.ssl-images-amazon.com/images/I/91wCpkzbquL.jpg" /></div>
                            <div class="col-7">
                                <div class="row">
                                    <span class="bookName fw-bolder">Attack On Titan 2</span>
                                </div>
                                <div class="row">
                                    <span class="price">69 ฿</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="delBtnCol d-flex align-items-center">
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-outline-dark"><AiFillDelete />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row cart-Item border border-start-0 border-end-0 py-2 border-dark">
                            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                            <div class="col-2 px-0"><img class="bookCover" src="https://images-na.ssl-images-amazon.com/images/I/91mcC5QBNqL.jpg" /></div>
                            <div class="col-7">
                                <div class="row">
                                    <span class="bookName fw-bolder">Attack On Titan 3</span>
                                </div>
                                <div class="row">
                                    <span class="price">69 ฿</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="delBtnCol d-flex align-items-center">
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-outline-dark"><AiFillDelete />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row cart-Item border border-start-0 border-end-0 py-2 border-dark">
                            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                            <div class="col-2 px-0"><img class="bookCover" src="https://images-na.ssl-images-amazon.com/images/I/91HfjIdXvrL.jpg" /></div>
                            <div class="col-7">
                                <div class="row">
                                    <span class="bookName fw-bolder">Attack On Titan 4</span>
                                </div>
                                <div class="row">
                                    <span class="price">69 ฿</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="delBtnCol d-flex align-items-center">
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-outline-dark"><AiFillDelete />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row cart-Item border border-start-0 border-end-0 py-2 border-dark">
                            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                            <div class="col-2 px-0"><img class="bookCover" src="https://th-test-11.slatic.net/p/e5eb57eb6436144bc6300a6ed2b3f3b0.jpg" /></div>
                            <div class="col-7">
                                <div class="row">
                                    <span class="bookName fw-bolder">Attack On Titan 5</span>
                                </div>
                                <div class="row">
                                    <span class="price">69 ฿</span>
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="delBtnCol d-flex align-items-center">
                                    <div class="d-flex">
                                        <button type="button" class="btn btn-outline-dark"><AiFillDelete />Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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