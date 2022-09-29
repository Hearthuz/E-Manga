import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register({ className }) {
    const logo = require('../assets/logo.png');
    const [postUser, setPostUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/users/', {
            fname: firstName,
            lname: lastName,
            email: email,
            username: username,
            password: password,
            permissionLevel: 1,
            series: [],
            buyedBooks: [],
            favoriteBooks: [
                {
                    bookId: 0
                }
            ]
        })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={className}>
            <div class="register-container">
                <div class="registerPage row">
                    <img src={logo} alt="E-Manga" class="logo rounded"></img>
                    <div>
                        <form class="registerForm" onSubmit={handleSubmit}>
                            <div class="row">
                                <div class="col-xl-6">
                                    <span>First Name</span>
                                    <input type="text" class="fname" placeholder='First Name' required onChange={e => setFirstName(e.target.value)}></input>
                                </div>
                                <div class="col-xl-6">
                                    <span>Last Name</span>
                                    <input type="text" class="lname" placeholder='Last Name' required onChange={e => setLastName(e.target.value)}></input>
                                </div>
                                <div>
                                    <span>Email</span>
                                    <input type="email" class="email" placeholder='E-mail' required onChange={e => setEmail(e.target.value)}></input>
                                    <span>Username</span>
                                    <input type="text" class="username" placeholder='Username' required onChange={e => setUsername(e.target.value)}></input>
                                    <span>Password</span>
                                    <input type="password" class="password" placeholder='Password' required onChange={e => setPassword(e.target.value)}></input>
                                    <div class="nevigateButton col">
                                        <button type="submit" class="registerButton">Sign up</button>
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