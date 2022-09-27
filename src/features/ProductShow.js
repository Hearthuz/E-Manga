import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';
import { FiHeart } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import { useParams } from 'react-router-dom';

function ProductShow({ className }) {
    const [manga, setManga] = useState([]);
    const { id } = useParams();

    console.log(id);
    useEffect(() => {
        async function getManga() {
            const manga = await axios.get(
                `http://localhost:8080/manga/${id}`
            );
            setManga(manga?.data);
        }
        getManga();
    }, []);

    console.log(manga);
    return (
        <div className={className}>
            <Navbar />
            <div className="productShow-container">
                <div>
                    <div class="row">
                        <div class="productName">{manga.name}</div>
                    </div>
                    <div class="row p-4">
                        <div class="col-md-6 col-sm-12 book_detail pr-1 py-1 justify-content-center">
                            <div class="row">
                                <img class="book_cover" src={manga.imageURL} />
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12 detailFrame rounded">
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 frontTag p-4 pr-6">Author</div>
                                <div class="col-xl-9 col-lg-8 col-md-6 col-sm-12 backTag p-4 pr-6">{manga.author}</div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 frontTag p-4 pr-6">Publisher</div>
                                <div class="col-xl-9 col-lg-8 col-md-6 backTag p-4 pr-6">{manga.publisher}</div>
                            </div>
                            <div class="row">
                                <div class="col-xl-3 col-lg-4 col-md-6 frontTag p-4 pr-6">BookType</div>
                                <div class="col-xl-9 col-lg-8 col-md-6 backTag p-4 pr-6">Comics</div>
                            </div>
                            <div class="row d-flex justify-content-around">
                                <button class="col-3 tryBtn btn btn-outline-light shadow-md" role="button">Try it!</button>
                                <button class="col-3 buyBtn btn btn-outline-success" role="button">Buy it!</button>
                                <button class="col-3 addFavBtn btn btn-outline-danger" role="button"><FiHeart /></button>
                            </div>
                            <div class="row p-4">
                                <div class="d-flex justify-content-around align-items-center">
                                    <div>
                                        <div class="rating">
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                        </div>
                                        <h5 class="review-count">12 Reviews</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="row py-2 px-4">
                                <span class="col-xl-3 col-lg-4 col-md-6 seriesName border-bottom border-black">Series :</span>
                                <span class="col-xl-9 col-lg-8 col-md-6 seriesName d-flex justify-content-end border-bottom border-black">{manga.seriesName}</span>
                            </div>
                            <div class="row py-2 px-4">
                                <span class="col-xl-3 col-lg-4 col-md-6 fileType border-bottom border-black">File type :</span>
                                <span class="col-xl-9 col-lg-8 col-md-6 fileType d-flex justify-content-end border-bottom border-black">PDF</span>
                            </div>
                            <div class="row py-2 px-4">
                                <span class="col-xl-3 col-lg-4 col-md-6 sellDate border-bottom border-black">Release date :</span>
                                <span class="col-xl-9 col-lg-8 col-md-6 sellDate d-flex justify-content-end border-bottom border-black">{manga.published}</span>
                            </div>
                            <div class="row py-2 px-4">
                                <span class="col-xl-3 col-lg-4 col-md-6 bookLength border-bottom border-black">Length :</span>
                                <span class="col-xl-9 col-lg-8 col-md-6 bookLength d-flex justify-content-end border-bottom border-black">{manga.page} pages</span>
                            </div>
                            <div class="row py-2 px-4">
                                <span class="col-xl-3 col-lg-4 col-md-6 price border-bottom border-black">Price :</span>
                                <span class="col-xl-9 col-lg-8 col-md-6 price d-flex justify-content-end border-bottom border-black">{manga.price} ฿</span>
                            </div>
                        </div>
                    </div>
                    <div class="row p-4">
                        <div class="row bg-white synopsisBlock d-flex justify-content-center align-items-center fit-content rounded">
                            <span class="synopsisText py-2">{manga.synopsis}</span>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center p-2">
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Japanese manga</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                        <div class="col-md-2 col-4 bg-white manga_Tag rounded-pill">Tag</div>
                    </div>
                    <div class="row d-flex justify-content-center p-2">
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51FAgOL-1bL.jpg" /></div>
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/81ctOuD4lIL.jpg" /></div>
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/815IWVldmFL.jpg" /></div>
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/91Os+dWdLdL.jpg" /></div>
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51QGDuqbn8L._SX331_BO1,204,203,200_.jpg" /></div>
                        <div class="col-md-2 col-4"><img class="addBook" src="https://images-na.ssl-images-amazon.com/images/I/51rXmu74skL._SX331_BO1,204,203,200_.jpg" /></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

ProductShow.propTypes = {
    className: PropTypes.object.isRequired
};

export default styled(ProductShow)`
.productShow-container{
    display: flex;
    margin: 0 auto;
    max-width: 1280px;
    justify-content: center;
    padding: 4rem;
}
.productName{
    text-align : center;
    padding-top : 2rem;
    color : #f5f5f5;
    font-size : 2rem;
}
.book_cover{
    width: 100%;
}

.detailFrame{
    opacity: 0.85;
    background-color: #ffffff;
}
.synopsisBlock{
    opacity: 0.85;
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
    object-fit : cover;
    opacity: 0.85;
}
.addBook{
    width : 9rem;
    padding: 0.5rem;
}
.synopsisText{
    text-align : center;
}
.seriesName{
    
}
.fileType {
    
}
.sellDate{
    
}
.bookLength{
    
}
.price {
    
}
@media only screen and (max-width: 992px) {
    .productName{
        text-align : center;
        padding-top : 2rem;
        color : #f5f5f5;
        font-size : 2rem;
    }
    .book_cover{
        width: 100%;
    }
    
    .detailFrame{
        background-color: #ffffff;
        overflow : scroll;
    }
    .synopsisBlock{
        height : 12rem;
        overflow: scroll;
    }
    .frontTag{
        font-size: 1rem;
    }
    .backTag{
        font-size: 1rem;
        color: #8758FF;
    }
    .manga_Tag{
        text-align : center;
        margin: 0.5rem;
        margin-bottom :1rem;  
    }
    .addBook{
        width : 7rem;
        padding: 0.5rem;
    }
    .synopsisText{
        font-size: 1rem;
        text-align : center;
    }
    .seriesName{
        overflow: clip;
        object-fit: cover;
    }
    .fileType {
        overflow: clip;
    }
    .sellDate{
        overflow: clip;
    }
    .bookLength{
        overflow: clip;
    }
    .price {
        overflow: clip;
    }
  }
  @media only screen and (max-width: 576px) {
    .productName{
        text-align : center;
        padding-top : 2rem;
        color : #f5f5f5;
        font-size : 2rem;
    }
    .book_cover{
        width: 100%;
    }
    
    .detailFrame{
        background-color: #ffffff;
        overflow : scroll;
    }
    .synopsisBlock{
        height : 12rem;
        overflow: scroll;
    }
    .frontTag{
        font-size: 1rem;
    }
    .backTag{
        font-size: 1rem;
        color: #8758FF;
    }
    .manga_Tag{
        text-align : center;
        margin: 0.5rem;
        margin-bottom :1rem;  
    }
    .addBook{
        width : 5rem;
        padding: 0.5rem;
    }
    .synopsisText{
        font-size: 1rem;
        text-align : center;
    }
    .seriesName{
        overflow: clip;
        object-fit: cover;
    }
    .fileType {
        overflow: clip;
    }
    .sellDate{
        overflow: clip;
    }
    .bookLength{
        overflow: clip;
    }
    .price {
        overflow: clip;
    }
  }
`