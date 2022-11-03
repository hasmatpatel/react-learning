import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 100%;
    }

    body {
        font-family: 'Poppins','Manrope', sans-serif;
        overflow-x: hidden;
    }


    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transform: translateY(0);
        letter-spacing: -.01rem;
        box-shadow: none;
    }

    .btn-primary {
        --bs-btn-bg: #000000;
        --bs-btn-border-color: #000000;
        --bs-btn-hover-bg: #333;
        --bs-btn-hover-border-color: #333;
        --bs-btn-active-bg: #333;
        --bs-btn-active-border-color: #333;
        --bs-btn-disabled-bg: #000;
        --bs-btn-disabled-border-color: #000;
    }

    .btn-outline-primary {
        --bs-btn-color: #000;
        --bs-btn-border-color: #000;
        --bs-btn-hover-bg: #000;
        --bs-btn-hover-border-color: #000;
        --bs-btn-active-bg: #000;
        --bs-btn-active-border-color: #000;
        --bs-btn-disabled-color: #000;
        --bs-btn-disabled-border-color: #000;
    }
    
    .navbar {
        --bs-navbar-nav-link-padding-x: 1rem;
    }

    .mw-100 {
        min-width:100px
    }

    .btn {
        padding: 0.75rem 1.25rem;
        line-height: 20px;
        font-size: 16px;
        font-weight: 500;
        font-family: 'Manrope',sans-serif;
    }

    .form-control:focus {
        color: #000;
        border-color: #000000;
        box-shadow: none;
    }

    .form-control {
        font-size: 16px;
        line-height: 1.5;
        min-height: 46px;
        font-family: 'Manrope',sans-serif;
    }

    textarea.form-control {
        min-height: 92px;
        resize: none;
        font-size: 16px;
        line-height: 1.5;
    }

    .card-root-array .btn-remove {
        position: absolute;
        top: -15px;
        right: -23px;
        border-radius: 100%;
        padding: 0;
        width: 30px;
        height: 30px;
        transform: translate(-12px, 12px);
        opacity: 0;
        transition: all 0.5s;
    }

    .card-root-array .card:hover .btn-remove {
        transform: translate(0, 0);
        opacity: 1;
    }

    /*.alert {
        &.OFF {
            --bs-alert-color: #41464b;
            --bs-alert-bg: #e2e3e5;
            --bs-alert-border-color: #d3d6d8;
        }
    }*/

    .alert-view-div {
        color: #000;
        background: #fafafa;
        border-radius: 30px;
        transition: all 0.8s ease-in-out;
        margin-bottom: 1.5rem;
        min-height: 290px;
        padding-top: 24px;

        p {
            font-size: 30px;
            line-height: 1.5;
            font-weight: 600;
            margin: 0 0 10px;
            font-family: 'Manrope',sans-serif;
        }

        .img-fluid {
            height: 185px;
            object-fit: contain;
            padding: 20px 0;
        }
    }

    .middle-area-opt-dv {
        &.OFF {
            opacity: 0.4;
            pointer-events: none;
            position: relative;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    }

    /* clamp styles */
    .clamp-lines > span {
        display: block;
    }

    .clamp-lines__button {
        background: none;
        border: 0;
        color: red;
        cursor: pointer;
        padding: 5px 0 0;
    }

    /*  */
    .contact-section {
        .contact-form-card {
            .card-body {
                padding: 30px;
            }
        }
    }

    .title-new-dv {
        padding: 0;
        margin: 0 0 40px;

        h2 { 
            text-align: center;
            font-weight: 600;
            font-size: 2.4rem;
            line-height: 1.2;
            color: #fff;
            -webkit-letter-spacing: 0.01rem;
            -moz-letter-spacing: 0.01rem;
            -ms-letter-spacing: 0.01rem;
            letter-spacing: 0.02rem;
        }
    }

    .fetch-section {
        padding: 70px 0 50px;
        margin: 0;
        position: relative;
        background-color: #252525;
    }

    .fetch-card {
        padding: 0;
        margin: 0 0 30px;
        position: relative;
        background-color: #fff;
        transition: .35s cubic-bezier(.04,.11,.6,.97);
        box-shadow: 0px 6px 20px 0px rgb(225 225 225 / 20%);
        border-radius: 16px;

        h3 {
            font-size: 27px;
            line-height: 1.5;
            margin: 0 0 5px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        p {
            font-size: 16px;
            line-height: 1.7;
            margin: 0;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .img-dv {
            position: relative;

            .img-full {
                border-radius: 16px 16px 0 0;
                width: 100%;
                object-fit: cover;
                height: 380px;
            }
        }

        .img-thumb-dv {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 90px;
            width: 90px;
            position: absolute;
            bottom: -45px;
            left: 25px;
            border: 5px solid #fff;
            border-radius: 100%;
            overflow: hidden;

            .thumbnail-img {
                width: 90px;
                height: 90px;
                object-fit: cover;
                border-radius: 100%;
                transition: all 0.3s ease-in-out;
            }
        }

        .content-dv {
            padding: 60px 30px 30px;
        }

        &:hover {
            .img-thumb-dv {
                .thumbnail-img {
                    transform: scale(1.2);
                }
            }
        }
    }

    .loader-root {
        color: #fff;
    }

    .tooltip {
        --bs-tooltip-padding-x: 1rem;
        --bs-tooltip-padding-y: 0.35rem;
        --bs-tooltip-font-size: 1rem;
        --bs-tooltip-color: #fff;
        --bs-tooltip-bg: #60697b;
        --bs-tooltip-border-radius: 0.25rem;
        --bs-tooltip-opacity: 1;
        --bs-tooltip-arrow-width: 1rem;
        --bs-tooltip-arrow-height: 0.4rem;
    }
`;
