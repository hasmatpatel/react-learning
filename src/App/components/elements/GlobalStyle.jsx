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
`;