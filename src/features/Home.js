import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Manga from './Manga';

function Home({ className }) {
    const slideImages1 = require('../assets/slide1.jpg');
    const slideImages2 = require('../assets/slide2.jpg');
    const slideImages3 = require('../assets/slide3.jpg');
    const [manga, setManga] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function getManga() {
            const manga = await axios.get(
                'http://localhost:8080/manga/'
            );
            setManga(manga.data);
        }
        getManga();
    }, []);

    const searchManga = (item) => {
        axios.get(
            `http://localhost:8080/manga?name=${item}`
        ).then(res => {
            setSearchResults(res.data);
        })
    }

    function handleChange(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchManga(e.target.value);
        }
    }

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
                <div class="searchContainer container-fluid d-flex justify-content-center">
                    <form class="d-flex searchBar rounded-pill" role="search">
                        <i class="bi bi-search searchIcon"></i>
                        <input type="search" class="searchInput rounded-pill " placeholder="Enter manga name" aria-label="Search" onKeyPress={handleChange} />
                    </form>
                </div>
                <div class="topManga-container">
                    <div class="topManga">
                        <h1>Top Manga</h1>
                        <div class="row">
                            {searchResults.length > 0 ?
                                (searchResults.map((result) => (
                                    <Manga key={result.id} item={result} />
                                ))
                                ) : (
                                    manga.map((mangaplus) => (
                                        <Manga key={mangaplus.id} item={mangaplus} />
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
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
        max-height: 28rem;
    }
    .searchContainer{
        position: absolute;
        z-index: 1;
        margin-top: -25px;
    }
    .searchIcon{
        padding: 10px;
        margin-top: -1px;
    }
    .searchBar{
        background-color: #e5e5e5;
        width: 75%;
        height: 50px;
        padding: 5px;
    }
    .searchInput{
        border: none;
        text-align: center;
        border-radius: 50px 0 0 50px;   
        background-image: linear-gradient(to right bottom, #c21500, #d74e00, #e87700, #f59e00, #ffc500);
        color: #ffffff;
    }
    .searchInput::placeholder{
        color: #ffffff;
    }
    .btn-search{
        color: #ffffff;
        background-color: #f7797d;
        border-radius: 0 50px 50px 0;
    }
    .btn-search:hover{
        color: #bdc3c7;
        background-color: #f7797d;
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