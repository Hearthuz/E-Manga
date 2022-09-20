import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiHeart } from "react-icons/fi";


function ProductShow({ className }) {
    return (
        <div className={className}>
            <div class="row">
                <div class="productName">Book Of Moon</div>
            </div>
            <div class="row p-4">
                <div class="col-6 book_detail pr-4 justify-content-center">
                    <div class="row">
                        <img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' />
                    </div>
                </div>
                <div class="col-6 detailFrame">
                    <div class="row">
                        <div class="col-3 frontTag p-4">Author</div>
                        <div class="col-3 backTag p-4">Person</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag p-4">Publisher</div>
                        <div class="col-3 backTag p-4">Name</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag p-4">BookType</div>
                        <div class="col-3 backTag p-4">BookType</div>
                    </div>
                    <div class="row">
                        <div class="col-3 myButton"><button class=' bg-warning rounded-pill'>Try it!</button></div>
                        <div class="col-3 buyBtn"><button class='buyIt bg-success rounded-pill'>Buy it!</button></div>
                        <div class="col-3 addFavBtn"><FiHeart /></div>
                    </div>
                </div>
            </div>
            <div class="row p-4">
                <div class="row bg-white synopsisBlock">
                    <span>Synopsis</span>
                </div>
            </div>
            <div class="row d-flex justify-content-center p-2">
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
                <div class="col-2 bg-white manga_Tag">Tag</div>
            </div>
            <div class="row">
                <div class="col-2"><img src="https://th-live-01.slatic.net/p/8598899196302d6d8bde1ee9e1f67208.jpg"/></div>
            </div>
        </div >
    )
}

ProductShow.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(ProductShow)`
    .productName{
        text-align : center;
        padding-top : 2rem;
        color : #f5f5f5;
        font-size : 2rem;
    }
    .book_cover{
        width: 75%;
    }
    
    .detailFrame{
        background-color: #ffffff;
    }
    .synopsisBlock{
        height : 10rem;
    }
    .frontTag{
        font-size: 1.5rem;
    }
    .backTag{
        font-size: 1.5rem;
    }
    .manga_Tag{
        text-align : center;
        margin: 0.5rem;
        margin-bottom :1rem;
        
    }
    
`