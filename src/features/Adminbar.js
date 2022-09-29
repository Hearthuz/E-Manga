import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Adminbar({ className }) {
    return (
        <div className={className}>
            <div class="notification">
                <h1 class="row header py-5 fw-bolder d-flex justify-content-center">Welcome To
                    Admin Page </h1>

                <div class="flex-color  rounded-4 shadow m-2">
                    <div class="manga-box position-relative">
                        <div class="container-fluid p-0 m-0">
                            <div class="row p-4 ">
                                <div class="d-flex m-4">
                                    <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2"></div>
                                </div>
                                <div class="col-3 p-2 d-flex  ">
                                    <img src="https://www.pngmart.com/files/13/Garfield-Cartoon-PNG-Pic.png" class="card-img-top" alt="..." />

                                </div>
                                <div class="col-9 ">


                                    <div class="d-flex flex-row-reverse">
                                        <div class="row col-3 p-4 m-2">
                                            <img src="https://www.pngmart.com/files/13/Garfield-Cartoon-PNG-Photo.png" class="card-img-top" alt="..." />
                                        </div>
                                        <p>
                                            <button class="btn btn-primary p-5 m-4 fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">  Add book</button>

                                            <button class="btn btn-warning p-5 m-5 fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">ฺฺBook acrhive</button>

                                        </p>
                                    </div>


                                </div>


                                {/* Amongus2 */}


                                <div class="d-flex m-4">
                                    <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div >

        </div >

    )
}

Adminbar.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(Adminbar)`
.carousel-item{
    height: 32rem;
}
.notification{

}
.notification h1{
    color: #ffffff;
    padding-bottom: 2rem;
}
.card-notification{
    margin:
}
.card:hover{
    filter: blur(2px);
}
.card-button{
    position: absolute;
    padding: 1rem;
    right: 0.3rem;
}
button{
    border: none;
    padding: 0.5rem;
}
.manga-box{
    
}
.favorite-button{
    margin-bottom: 0.5rem;
    background: #ff6961;
}
.flex-color{
    background: #d9d9d9;
}
flex-container{
display: flex;
height: 20rem;
align-items: center;
}
.detailFrame{
    background-color: #d9d9d9;
}
.newTag{
font-size: 40px;
color: #8758FF;
}
.backTag{
    color: #8758FF;
.header{
    color : #f5f5f5;
    font-size : 4rem;
}
.dataBlock{
    width : 50rem;
    overflow : auto;
}
.cart-Item{
}
input {
    height: 2rem;
    width: 2rem;
    background-color: #eee;
}
.bookCover {
    width: 100%;
}
.checkBoxCol{
    height :100%;
}
.delBtnCol{
    height :100%;
}
.selectAll{
    font-size :1.5rem;
    color : #eeeeee;
}

`