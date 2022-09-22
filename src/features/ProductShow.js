import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiHeart } from "react-icons/fi";
import { BsStar } from "react-icons/bs";


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
                    <div class="row d-flex justify-content-around">
                        <button class="col-3 tryBtn btn btn-outline-light shadow-sm" role="button">Try it!</button>
                        <button class="col-3 buyBtn btn btn-outline-success" role="button">Buy it!</button>
                        <button class="col-3 addFavBtn btn btn-outline-danger" role="button"><FiHeart /></button>
                    </div>
                    <div class="row p-4">
                        <div class="d-flex justify-content-around align-items-center">
                            <div class="ratings">
                                <i><BsStar /></i>
                                <i><BsStar /></i>
                                <i><BsStar /></i>
                                <i><BsStar /></i>
                                <i><BsStar /></i>
                            </div>
                            <h5 class="review-count">12 Reviews</h5>
                        </div>
                    </div>
                    <div class="row py-2 px-4">
                        <span class="col-3 seriesName border-bottom border-black">Series :</span>
                        <span class="col-9 seriesName d-flex justify-content-end border-bottom border-black">Lorem ipsum dolor sit amet</span>
                    </div>
                    <div class="row py-2 px-4">
                        <span class="col-sm-3 fileType border-bottom border-black">File type :</span>
                        <span class="col-sm-9 fileType d-flex justify-content-end border-bottom border-black">PDF</span>
                    </div>
                    <div class="row py-2 px-4">
                        <span class="col-sm-3 sellDate border-bottom border-black">Release date :</span>
                        <span class="col-sm-9 sellDate d-flex justify-content-end border-bottom border-black">dd/mm/yyyy</span>
                    </div>
                    <div class="row py-2 px-4">
                        <span class="col-sm-3 bookLength border-bottom border-black">Length :</span>
                        <span class="col-sm-9 bookLength d-flex justify-content-end border-bottom border-black">xxx pages</span>
                    </div>
                    <div class="row py-2 px-4">
                        <span class="col-sm-3 price border-bottom border-black">Price :</span>
                        <span class="col-sm-9 price d-flex justify-content-end border-bottom border-black">xxx ฿</span>
                    </div>
                </div>
            </div>
            <div class="row p-4">
                <div class="row bg-white synopsisBlock d-flex justify-content-center align-items-center fit-content ">
                    <span class="synopsisText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa tortor, vestibulum quis semper sit amet, consectetur sed ante. Pellentesque at libero hendrerit sapien porttitor molestie. Praesent congue ante non orci auctor vulputate. Proin ut leo vitae lectus tristique sodales. Cras at euismod elit. Pellentesque diam risus, posuere non nunc at, commodo feugiat lectus. Aenean sollicitudin velit vitae mauris fermentum tempus. Praesent gravida purus eu cursus condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor, nibh a pharetra semper, justo lacus vestibulum enim, sit amet mattis felis odio ultricies nisl. Etiam at quam hendrerit, blandit est a, aliquet ex. Fusce ac sem turpis. Sed porta, risus sed congue auctor, quam turpis fermentum mi, ut tristique sapien purus in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque massa lorem, blandit ac nisl vitae, tempor lobortis nisi. Nulla sit amet risus eu ex vulputate tincidunt ut a est.</span>
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
        height : 12rem;
    }
    .frontTag{
        font-size: 1.5rem;
    }
    .backTag{
        font-size: 1.5rem;
        color: #8758FF;
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
    .synopsisText{
        text-align : center;
    }
`