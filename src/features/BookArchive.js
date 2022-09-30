import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavbarAdmin from './NavbarAdmin';
import { BsSearch } from "react-icons/bs";
import axios from 'axios';
import ArchiveCard from './Manga/bookArchiveCard';

function BookArchive({ className }) {
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
            <NavbarAdmin />
            <div class="bookArchive-container bg-white w-100 h-100">
                <div class="row w-100 h-100 py-5">
                    <div class="d-flex justify-content-center alignt-item-center">
                        <div class="searchContainer container-fluid d-flex justify-content-center">
                            <form class="d-flex searchBar rounded-pill" role="search">
                                <i class="bi bi-search searchIcon"></i>
                                <input type="search" class="searchInput rounded-pill " placeholder="Enter manga name" aria-label="Search" onKeyPress={handleChange} />
                            </form>
                        </div>
                    </div>
                    <div class="row py-3 mt-4 mb-2 resultBlock">
                        {
                            searchResults.length > 0 ?
                                (searchResults.map((result) => (
                                    <ArchiveCard key={result.id} item={result} />
                                ))
                                ) : (
                                    manga.map((mangaplus) => (
                                        <ArchiveCard key={mangaplus.id} item={mangaplus} />
                                    ))
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

BookArchive.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(BookArchive)`
.bookArchive-container{
    display: flex;
    justify-content: center;
    padding: 4rem;  
}
input {
    width : 100%;
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
    background-color: #fffff;
    width: 75%;
    height: 50px;
    padding: 5px;
}
.searchInput{
    text-align: center;
    border-radius: 50px 0 0 50px;   
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
`