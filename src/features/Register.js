import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Register({ className }) {
    const logo = require('../assets/logo.png');
    return (
        <div className={className}>
            <div class="register-container">
                <div class="registerPage row">
                    <img src={logo} alt="E-Manga" class="logo rounded"></img>
                    <div>
                        <form class="registerForm">
                            <div class="row">
                                <div class="col-xl-6">
                                    <span>First Name</span>
                                    <input type="text" class="fname" placeholder='First Name' required></input>
                                </div>
                                <div class="col-xl-6">
                                    <span>Last Name</span>
                                    <input type="text" class="lname" placeholder='Last Name' required></input>
                                </div>
                                <div>
                                    <span>Email</span>
                                    <input type="email" class="email" placeholder='E-mail' required></input>
                                    <span>User ID</span>
                                    <input type="text" class="username" placeholder='Username' required></input>
                                    <span>Password</span>
                                    <input type="password" class="password" placeholder='Password' required></input>
                                    <span>Password Again</span>
                                    <input type="password" class="passwordAgain" placeholder='Password Again' required></input>
                                    <div class="nevigateButton col">
                                        <Link to="/"><button class="registerButton">Sign up</button></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Register)`
    .register-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .registerPage{
        display: flex;
        justify-content: center;
        width: 35%; 
    }
    .logo{
        margin: 1rem;
        padding-top: 1rem;
        width: 75%;
        background-color: #ffffff;
        opacity: 0.75; 
    }
    input{
        margin: 1rem 0 1rem 0;
    }
    span{
        color: #ffffff;
    }
    .nevigateButton{
        margin-top: 1rem;
    }
    .registerButton{
        background-color: red;
    }
`