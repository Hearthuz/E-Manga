import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

function CartManga({ item }) {
    const userId = localStorage.getItem("token");
    const deleteManga = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/users/${userId[7]}/cart/${item.id}`)
            .then(() => alert("Delete Complete"))
            .catch((err) => alert(err));

        window.location.reload();
    }
    return (
        <Accordion.Item eventKey={item.id}>
            <Accordion.Header><div class="col-2"><input type="checkbox"></input></div><div class="col-10 accordionName">{item.name}</div></Accordion.Header>
            <Accordion.Body>
                <div class="col-12">{item.name}</div>
                <div class="col-12 col-sm-6"><img src={item.imageURL} class="book-cover img-fluid py-1"></img></div>
                <div class="col-12 col-sm-6">Price : {item.price} Bath</div>
                <button type="button" class="btn btn-danger col-12" onClick={deleteManga}><AiFillDelete />Delete</button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default styled(CartManga)`
.accordionName{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
`