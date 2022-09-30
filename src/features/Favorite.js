import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import axios from 'axios';
import Manga from './Manga';

function Favorite({ className }) {
    const [favorite, setFavorite] = useState([]);
    const userData = JSON.parse(localStorage.getItem("token"));
    const userId = userData[0].id;

    useEffect(() => {
        async function getFavoriteManga() {
            const manga = await axios.get(
                `http://localhost:8080/users/${userId}`
            );
            setFavorite(manga.data.favoriteBooks);
        }
        getFavoriteManga();
    }, []);

    console.log();
    return (
        <div className={className}>
            <Navbar />
            <div className="favorite-container">
                <div class="favorites">
                    <h1>Favorite Manga</h1>
                    <div className="row">
                        {
                            favorite.map((mangaplus) => (
                                <Manga key={mangaplus.id} item={mangaplus} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Favorite)`
    .favorite-container{
        display: flex;
        justify-content: center;
        padding: 4rem;
    }
    .favorites{
        width: 90%;
    }
    .favorites h1{
        color: #ffffff;
        padding: 3rem 0 3rem 0;
        text-align: center;
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