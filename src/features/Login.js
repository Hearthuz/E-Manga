import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

async function fetchToken(userIn) {
    let response = await fetch('http://localhost:8080/users/');
    console.log(response.status);

    if (response.status === 200) {
        let data = await response.json();
        console.log(data);

        function check(user) {
            if (user.username === userIn.username && user.password === userIn.password) {
                console.log(user);
                return user;
            }
        }

        const userRight = data.filter(check);
        console.log(userRight);

        if (userRight.length !== 0) {
            return userRight;
        }
        else {
            alert('wrong username or password');
            return null;
        }
    }
}
function Login({ className, setToken }) {
    const logo = require('../assets/logo.png');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await fetchToken({
            username,
            password
        })
        setToken(token);
        console.log(token[0].permissionLevel);
        if (token[0].permissionLevel === 2) {
            window.location.href = "/addBook";
        }
        else if (token[0].permissionLevel === 1) {
            window.location.href = "/";
        }
    }

    return (
        <div className={className}>
            <div class="login-container">
                <div class="LoginPage">
                    <div class="loginLogo row">
                        <img src={logo} alt="E-Manga" class="logo rounded"></img>
                        <div>
                            <form class="loginForm" onSubmit={handleSubmit}>
                                <span>User ID</span>
                                <input type="text" class="username" id="username" placeholder='username' required onChange={e => setUsername(e.target.value)}></input>
                                <span>Password</span>
                                <input type="password" class="password" id="password" placeholder='password' required onChange={e => setPassword(e.target.value)}></input>
                                <div class="col nevigateButton">
                                    <button class="loginButton" type='submit'>Login</button>
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