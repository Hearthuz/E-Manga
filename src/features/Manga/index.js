import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Favorite from '../Favorite';

function Manga({ item, setReFa }) {
    const [cart, setCart] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [reFav, setReFav] = useState([]);
    const [reCart, setReCart] = useState([]);
    const userData = JSON.parse(localStorage.getItem("token"));
    const userId = userData[0].id;
    let location = useLocation();

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
        if (location.pathname === '/favorite') {
            axios.delete(`http://localhost:8080/users/${userId}/favorite/${item.id}`)
                .then((res) => {
                    alert("Remove from favorite")
                    setReFav(favorite);
                    window.location.reload();
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            const check = checkData(favorite, item.id);
            if (check === true || check === undefined) {
                axios.post(`http://localhost:8080/users/${userId}/favorite`, {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    imageURL: item.imageURL
                }).then((response) => {
                    alert("Add Success");
                    setReFav(favorite);
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                });
            }
            else {
                alert("Alerady Add");
            }
        }
    }

    function addCart(e) {
        e.preventDefault();
        const check = checkData(cart, item.id);
        if (check === true || check === undefined) {
            axios.post(`http://localhost:8080/users/${userId}/cart`, {
                id: item.id,
                name: item.name,
                price: item.price,
                imageURL: item.imageURL
            }).then((response) => {
                alert("Add Success");
                setReCart(cart);
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
        <div class="col-xl-2 col-md-3 col-sm-4 col-6">
            <div class="manga-box position-relative">
                <div class="card">
                    <img id="manga_url" src={item.imageURL} class="card-img-top rounded" alt="..." />
                    <div class="image_overlay image_overlay-blur rounded">
                        <div class="card-button row">
                            <div class="favorite"><button type="button" class="favorite-button rounded" onClick={addFavorites}><i class="bi bi-heart"></i></button></div>
                            <Link to={{
                                pathname: `/productShow/${item.id} `
                            }} class="mangaName">{item.name}</Link>
                            < div class="cart"><button type="button" class="cart-button rounded" onClick={addCart}><i class="bi bi bi-bag-plus"></i></button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Manga.propTypes = {
    item: PropTypes.object.isRequired
};

export default styled(Manga)`
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
`;