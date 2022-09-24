import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home({ className }) {
    const slideImages1 = require('../assets/slide1.jpg');
    const slideImages2 = require('../assets/slide2.jpg');
    const slideImages3 = require('../assets/slide3.jpg');

    return (
        <div className={className}>
            <Navbar />
            <div class="homePage">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slideImages1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slideImages2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={slideImages3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="topManga-container">
                    <div class="topManga">
                        <h1>Top Manga</h1>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="manga-box position-relative">
                                    <div class="card">
                                        <img id="manga_url" src="https://img.freepik.com/free-vector/smiling-girl-anime-character-poster_603843-3026.jpg?w=360" class="card-img-top rounded" alt="..." />
                                        <div class="image_overlay image_overlay-blur rounded">
                                            <div class="card-button row">
                                                <div class="favorite"><button type="button" class="favorite-button rounded"><i class="bi bi-heart"></i></button></div>
                                                <Link to="/productShow" class="mangaName">MangaPlus</Link>
                                                <div class="cart"><button type="button" class="cart-button rounded"><i class="bi bi bi-bag-plus"></i></button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}

Home.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Home)`
    .homePage{
        padding-top: 4rem;
    }
    .carousel-item{
        max-height: 32rem;
    }
    .topManga-container{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .topManga{
        width: 90%;
        padding: 3rem;
    }
    .topManga h1{
        color: #ffffff;
        padding-bottom: 2rem;
    }
    .image_overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        background: rgb(0,0,0,0.3);
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.25s;
    }
    .image_overlay-blur {
        backdrop-filter: blur(5px);
    }
    .image_overlay-primary {
        background: #009578;
    }
    .image_overlay > * {
        transform: translateY(20px);
        transition: transform 0.25s;
    }
    .image_overlay:hover {
        opacity: 1;
    }
    .image_overlay:hover > * {
        transform: translateY(0);
    }
    .card-button{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: space-center;    
    }
    button{
        border: none;
    }
    .mangaName{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        font-weight: bold;
        color: #ffffff;
        text-align: center;
    }
    .manga-box{
        padding-bottom: 1rem;
    }
    .cart-button{
        margin: 0.5rem;
        padding: 0.5rem;
        width: 100%;
    }
    .cart{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end
    }
    .favorite{
        display: flex;
        justify-content: flex-end;
    }
    .favorite-button{
        margin: 0.5rem 0.5rem 0;
        padding: 0.5rem;
        height: 50%;
        width: auto;
        background: #ff6961;    
    }
`