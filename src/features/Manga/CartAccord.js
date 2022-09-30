import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AiFillDelete } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';

function CartAccord({ item }) {

    const delFunc = () => {
        axios.delete(``).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Accordion.Item eventKey={item.id}>
            <Accordion.Header><div class="col-2"><input type="checkbox"></input></div><div class="col-10 accordionName">{item.name}</div></Accordion.Header>
            <Accordion.Body>
                <div class="col-12">{item.name}</div>
                <div class="col-12 col-sm-6"><img src={item.imageURL} class="book-cover img-fluid py-1"></img></div>
                <div class="col-12 col-sm-6">Price : {item.price} Bath</div>
                <button type="button" class="btn btn-danger col-12"><AiFillDelete />Delete</button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

CartAccord.propTypes = {
    item: PropTypes.object.isRequired
};

export default styled(CartAccord)`
.accordionName{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
`