import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';

function CartManga({ item }) {
    const userId = localStorage.getItem("token");
    const deleteManga = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/users/${userId[7]}/cart/${item.id}`)
            .then(() => alert("Delete"))
            .catch((err) => alert(err));

        window.location.reload();
    }
    return (
        <div class="row py-2 cart-Item border border-start-0 border-end-0 border-dark">
            <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
            <div class="col-2 px-0"><img class="bookCover" src={item.imageURL} /></div>
            <div class="col-7">
                <div class="row">
                    <Link to={{
                        pathname: `/productShow/${item.id}`
                    }} class="mangaName">{item.name}</Link>
                </div>
                <div class="row">
                    <span class="price">{item.price}</span>
                </div>
            </div>
            <div class="col-2">
                <div class="delBtnCol d-flex align-items-center">
                    <div class="d-flex">
                        <button type="button" class="btn btn-outline-dark" onClick={deleteManga}><AiFillDelete />Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartManga