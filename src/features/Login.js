import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login({ className }) {
    const logo = require('../assets/logo.png');
    return (
        <div className={className}>
            <div class="login-container">
                <div class="LoginPage">
                    <div class="loginLogo row">
                        <img src={logo} alt="E-Manga" class="logo rounded"></img>
                        <div>
                            <form class="loginForm">
                                <span>User ID</span>
                                <input type="text" class="username" placeholder='username' required></input>
                                <span>Password</span>
                                <input type="password" class="password" placeholder='password' required></input>
                                <div class="col nevigateButton">
                                    <button class="loginButton">Login</button>
                                    <button class="registerButton">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Login)`
span{
    color: #ffffff;
}
.expand{
    height: 3.1rem;
}
.nevigateButton{
    display: flex;
    justify-content: start;
    margin-top: 1rem;
}
.loginButton{
    margin-right: 1rem;
    background-color: #E30C0C;
}
.registerButton{
    background-color: #D9D9D9;
    color: #000000;
}
.login-container{
    height: 100vh;
    margin: 0 auto;
    padding: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.LoginPage{
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginLogo{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.username,.password{
    margin-top: 1rem;
    margin-bottom: 1rem;
}
.logo{
    width:90%;
    background-color: #ffffff;
    padding-top: 1rem;
    opacity: 0.75;
}
.loginForm{
    padding: 1rem;
}
`