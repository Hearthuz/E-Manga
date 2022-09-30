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
    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [reFav, setReFav] = useState([]);
    const [reCart, setReCart] = useState([]);
    const userData = JSON.parse(localStorage.getItem("token"));
    const userId = userData[0].id;

    useEffect(() => {
        async function getManga() {
            const manga = await axios.get(
                `http://localhost:8080/manga/${id}`
            );
            setManga(manga?.data);
        }
        getManga();
    }, []);

    const genreAll = (manga.genre);

    useEffect(() => {
        async function getCart() {
            const manga = await axios.get(
                `http://localhost:8080/users/${userId}`
            );
            setCart(manga.data.cart);
        }
        getCart();
    }, [reCart]);

    useEffect(() => {
        async function getFavoriteManga() {
            const manga = await axios.get(
                `http://localhost:8080/users/${userId}`
            );
            setFavorite(manga.data.favoriteBooks);
        }
        getFavoriteManga();
    }, [reFav]);

    function checkData(data, id) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                return false;
            }
        }
        return true;
    }
    function addFavorites(e) {
        e.preventDefault();
        const check = checkData(favorite, manga.id);
        if (check === true || check === undefined) {
            axios.post(`http://localhost:8080/users/${userId}/favorite`, {
                id: manga.id,
                name: manga.name,
                price: manga.price,
                imageURL: manga.imageURL
            }).then((response) => {
                alert("Add Success");
                setReFav(favorite)
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            alert("Alerady Add");
        }
    }

    function addCart(e) {
        e.preventDefault();
        const check = checkData(cart, manga.id);
        if (check === true || check === undefined) {
            axios.post(`http://localhost:8080/users/${userId}/cart`, {
                id: manga.id,
                name: manga.name,
                price: manga.price,
                imageURL: manga.imageURL
            }).then((response) => {
                alert("Add Success");
                setReCart(cart)
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        }
        else {
            alert("Alerady Add");
        }
    }

    return (
        <div className={className}>
            <Navbar />
            <div className="productShow-container">
                <div>
                    <div className="row">
                        <div className="productName">{manga.name}</div>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-6 col-sm-12 book_detail pr-1 py-1 justify-content-center">
                            <div className="row">
                                <img className="book_cover" src={manga.imageURL} />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 detailFrame rounded">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 frontTag p-4 pr-6">Author</div>
                                <div className="col-xl-9 col-lg-8 col-md-6 col-sm-12 backTag p-4 pr-6">{manga.author}</div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 frontTag p-4 pr-6">Publisher</div>
                                <div className="col-xl-9 col-lg-8 col-md-6 backTag p-4 pr-6">{manga.publisher}</div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 frontTag p-4 pr-6">BookType</div>
                                <div className="col-xl-9 col-lg-8 col-md-6 backTag p-4 pr-6">Comics</div>
                            </div>
                            <div className="row d-flex justify-content-around">
                                <button className="col-3 tryBtn btn btn-outline-light shadow-md" role="button">Try it!</button>
                                <button className="col-3 buyBtn btn btn-outline-success" role="button" onClick={addCart}>Buy it!</button>
                                <button className="col-3 addFavBtn btn btn-outline-danger" role="button" onClick={addFavorites}><FiHeart /></button>
                            </div>
                            <div className="row p-4">
                                <div className="d-flex justify-content-around align-items-center">
                                    <div>
                                        <div className="rating">
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                            <i><BsStar /></i>
                                        </div>
                                        <h5 className="review-count">12 Reviews</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-2 px-4">
                                <span className="col-xl-3 col-lg-4 col-md-6 seriesName border-bottom border-black">Series :</span>
                                <span className="col-xl-9 col-lg-8 col-md-6 seriesName d-flex justify-content-end border-bottom border-black">{manga.seriesName}</span>
                            </div>
                            <div className="row py-2 px-4">
                                <span className="col-xl-3 col-lg-4 col-md-6 fileType border-bottom border-black">File type :</span>
                                <span className="col-xl-9 col-lg-8 col-md-6 fileType d-flex justify-content-end border-bottom border-black">PDF</span>
                            </div>
                            <div className="row py-2 px-4">
                                <span className="col-xl-3 col-lg-4 col-md-6 sellDate border-bottom border-black">Release date :</span>
                                <span className="col-xl-9 col-lg-8 col-md-6 sellDate d-flex justify-content-end border-bottom border-black">{manga.published}</span>
                            </div>
                            <div className="row py-2 px-4">
                                <span className="col-xl-3 col-lg-4 col-md-6 bookLength border-bottom border-black">Length :</span>
                                <span className="col-xl-9 col-lg-8 col-md-6 bookLength d-flex justify-content-end border-bottom border-black">{manga.page} pages</span>
                            </div>
                            <div className="row py-2 px-4">
                                <span className="col-xl-3 col-lg-4 col-md-6 price border-bottom border-black">Price :</span>
                                <span className="col-xl-9 col-lg-8 col-md-6 price d-flex justify-content-end border-bottom border-black">{manga.price} ฿</span>
                            </div>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="bg-white synopsisBlock d-flex justify-content-center align-items-center fit-content rounded">
                            <span className="synopsisText py-2">{manga.synopsis}</span>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center p-2">
                        {
                            genreAll?.map(mag => {
                                return (<div className="col-md-2 col-5 bg-white manga_Tag rounded-pill fit-content p-3">{mag}</div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
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
    width: 90%;
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
    margin: 0.5rem;
    margin-bottom :1rem;  
    opacity: 0.85;
    text-align : center;
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