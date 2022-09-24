import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function User({ className }) {
    return (
        <div className={className}>
            <div class="notification">
                <h1 class="row header py-5 fw-bolder d-flex justify-content-center">User</h1>

                <div class="flex-color  rounded-4 shadow m-2">
                    <div class="manga-box position-relative">
                        <div class="container-fluid p-0 m-0">
                            <div class="row p-4 ">

                                <div class="col-3  ">
                                    <img src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/284881659_3204691569858453_6519756578875366273_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xBfbyJuwosAAX9n3lTE&_nc_ht=scontent.fbkk14-1.fna&oh=00_AT-7txODaFqs5vv3IWOQdnigdwSWFScZxFszOQsuG8ipfQ&oe=6332DA21" class="card-img-top" alt="..." />
                                </div>
                                <div class="col-9 ">
                                    <div class="container-fluid  fs-5 me-4 border-top border-3 border-dark pb-2"></div>
                                    <div class="d-flex m-4">
                                        <div class="  fs-4 me-5">User Name</div>

                                    </div>
                                    <div class="d-flex m-4">
                                        <div class="  fs-5 me-4">Email</div>

                                    </div>
                                    <div class="d-flex m-4">
                                        <div class="  fs-5 me-4">Address</div>

                                    </div>
                                    <div class="d-flex m-4">
                                        <div class="  fs-5 me-4">Mobile Number</div>

                                    </div>
                                    <div class="container-fluid  border-top border-3 border-dark pb-1"></div>
                                </div>



                                <div class="d-flex m-4">
                                    <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2">History</div>
                                </div>
                                <div class="col-1"><div class=" checkBoxCol d-flex align-items-center"><div class="d-flex"><input type={'checkbox'}></input></div></div></div>
                                <div class="col-1  ">
                                    <img src="https://th-test-11.slatic.net/p/e5eb57eb6436144bc6300a6ed2b3f3b0.jpg" class="card-img-top" alt="..." />
                                </div>

                                <div class="col-7">
                                    <div class="row">
                                        <span class="bookName fw-bolder">Attack On Titan 5</span>
                                    </div>
                                    <div class="row ">
                                        <span class="price ">69 ฿</span>
                                    </div>
                                </div>


                                <div class="d-flex m-4">
                                    <div class="container-fluid  fs-5 me-4 border-bottom border-3 border-dark pb-2"></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="d-flex py-2 px-4"><input type={'checkbox'}></input><span class="px-2 selectAll">Select All</span></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

User.propTypes = {
    className: PropTypes.string.isRequired
};

export default styled(User)`
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
