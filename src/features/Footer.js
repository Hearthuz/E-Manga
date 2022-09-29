import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className='bg-light text-center text-white'>
            <div className='p-4 pb-0'>
                <section className='mb-4'>
                    <button floating className='m-1' href='#!' role='button'>
                        <FaFacebook />
                    </button>

                    <button floating className='m-1' href='#!' role='button'>
                        <FaTwitter />
                    </button>

                    <button floating className='m-1' href='#!' role='button'>
                        <FaGoogle />
                    </button>
                    <button floating className='m-1' href='#!' role='button'>
                        <FaInstagram />
                    </button>

                    <button floating className='m-1' href='#!' role='button'>
                        <FaLinkedin />
                    </button>

                    <button floating className='m-1' href='#!' role='button'>
                        <FaGithub />
                    </button>
                </section>
            </div>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2020 Copyright:
                <a className='text-white' href='/'>
                    #E-manga.com
                </a>
            </div>
        </footer>
    );
}