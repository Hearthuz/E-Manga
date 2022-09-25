import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavbarAdmin({ className }) {
    const logo = require('../assets/logo.png');
    return (
        <header className={className}>
            <div class="navbar navbar-expand-lg">
                <div class="container-fluid p-0">
                    <img src={logo} class="logoPic" alt="E-Manga"></img>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/">Add</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/BookArchive">Update & Delete</Link>
                            </li>
                        </ul>
                        <div class="user mb-2 mb-lg-0">
                            <Link>Admin Page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

NavbarAdmin.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(NavbarAdmin)`
  .navbar-expand-lg{
    width: 100%;
    height: 64px;
    position: fixed;
    z-index: 100;
    background-color: #111111;
    border-bottom: 1px solid #595656;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  .collapse{
    background-color: #111111;
  }
  .navbar-toggler{
    margin-right: 2rem;
  }
  a{
    padding: 0 2rem 0 2rem;
    color: #E1A140;
  }
  a:hover{
    color: #FF3B3F;
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
    padding: 0;
  }
  .brand {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;