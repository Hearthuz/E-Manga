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
                <div class="col-6 book_detail pr-1 justify-content-center">
                    <div class="row">
                        <img class="book_cover" src='https://i.pinimg.com/550x/28/19/d1/2819d12523097ccea2e541d972437128.jpg' />
                    </div>
                </div>
                <div class="col-6 detailFrame">
                    <div class="row">
                        <div class="col-3 frontTag p-4 pr-6">Author</div>
                        <div class="col-3 backTag p-4 pr-6">Person</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag p-4 pr-6">Publisher</div>
                        <div class="col-3 backTag p-4 pr-6">Name</div>
                    </div>
                    <div class="row">
                        <div class="col-3 frontTag p-4 pr-6">BookType</div>
                        <div class="col-3 backTag p-4 pr-6">BookType</div>
                    </div>
                    <div class="row d-flex justify-content-center p-2">
                        <div class="col-3 tryBtn" role="button">Try it!</div>
                        <div class="col-3 buyBtn" role="button">Buy it!</div>
                        <div class="col-3 addFavBtn" role="button"><FiHeart /></div>
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
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51FAgOL-1bL.jpg"/></div>
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/81ctOuD4lIL.jpg"/></div>
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/815IWVldmFL.jpg"/></div>
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/91Os+dWdLdL.jpg"/></div>
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51QGDuqbn8L._SX331_BO1,204,203,200_.jpg"/></div>
                <div class="col-2"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51rXmu74skL._SX331_BO1,204,203,200_.jpg"/></div>
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
    .addBook{
        width : 9rem;
        padding: 0.5rem;
    }
`