import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ArchiveCard({ item }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const delFunc = () => {
        
    }

    return (
        <>
        <div class="col-xl-2 col-md-3 col-sm-4 col-6" onClick={handleShow}>
            <div class="manga-box position-relative">
                <div class="card">
                    <img id="manga_url" src={item.imageURL} class="card-img-top rounded" alt="..." />
                    <div class="image_overlay image_overlay-blur rounded">
                        <div class="card-button row">
                            <div class="mangaName">{item.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Want to Edit?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Do you want to Edit {item.name}
          </Modal.Body>
          <Modal.Footer>
          <Link to={{
            pathname: `/editBook/${item.id} `
        }}><Button variant="success">Edit</Button></Link>
            <Button variant="danger" onClick={delFunc}>Delete</Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  
    )
}

ArchiveCard.propTypes = {
    item: PropTypes.object.isRequired
};
export default styled(ArchiveCard)`
`