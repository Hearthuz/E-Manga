import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ className }) {
  const logo = require('../assets/logo.png');
  const handleClick = (e) => {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <header className={className}>
      <div class="navbar navbar-expand-lg">
        <div class="container-fluid p-0">
          <img src={logo} class="logoPic" alt="E-Manga"></img>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="d-flex navbar-nav fw-bold me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="home">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/favorite">Favorite</Link>
              </li>
            </ul>
            <div class="fw-bold">
              <Link to="/cart"><i class="bi bi-bag"></i> Cart</Link>
            </div>
            <div class="user mb-2 mb-lg-0 fw-bold">
              <Link onClick={handleClick}>Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

Navbar.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Navbar)`
  .navbar-expand-lg{
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 100;
    background-color: #F5F5F5;
    border-bottom: 1px solid #dee2e6;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  .collapse{
    background-color: #F5F5F5;
  }
  .navbar-toggler{
    margin-right: 2rem;
  }
  a{
    margin: 0 2rem 0 2rem;
    color: #AB987A;
  }
  a:hover{
    color: #FF3B3F;
    border-bottom: 0.25rem solid #ff0a54;
  }
  .logoPic{
    padding-right: 1rem;
    margin-left: 2rem;
    width: 7rem;
  }
  .user{
    padding: 0 1rem 0 2rem;
    margin-right: 2rem;
  }
  .user a{
    margin: 0;
  }
  .brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;