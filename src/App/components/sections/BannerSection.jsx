import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BannerBox = styled.section`
    font-family: 'Manrope', sans-serif;

    .bg-gray {
        background-color: #f6f7f9;
    }

    .img-mask.mask-1 img {
        -webkit-mask-image: url(./images/svg/blob.svg);
        mask-image: url(./images/svg/blob.svg);
        -webkit-mask-position: center center;
        mask-position: center center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        height: 600px;
        width: 100%;
        max-width: 100%;
        -webkit-mask-size: auto auto;
        object-fit: cover;
    }

    h1 {
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 1.2;
        color: #343f52;
        word-spacing: 0.2rem;
        letter-spacing: 0.01rem;
        margin-bottom: 1.5rem;
    }

    h6 {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-weight: 600;
        color: #60697b;
        text-transform: uppercase;
        letter-spacing: 1px;
        background: rgb(0 0 0 / 6%);
        display: inline-flex;
        padding: 0.25rem 1rem;
        border-radius: 8px;
    }

    p {
        font-size: 1.5rem;
        line-height: 1.5;
        margin-bottom: 2rem;
        font-weight: 500;
        color: #60697b;
    }

    .aboutBanner {
        .img-mask.mask-1 img {
            -webkit-mask-image: url(./images/svg/blob2.svg);
            mask-image: url(./images/svg/blob2.svg);
        }
    }
`;

const BannerSection = (props) => {
    return (
        <>
            <BannerBox className="wrapper bg-gray">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto">
                            <div className="img-mask mask-1">
                                {/* <img src={props.bannerImg} loading="lazy" alt="" /> */}
                                <LazyLoadImage 
                                src={props.bannerImg} 
                                effect="blur" 
                                loading="lazy" 
                                beforeLoad={() => {
                                    console.log("Before Load");
                                }}
                                afterLoad={() => {
                                    console.log("After Load");
                                }}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1">
                            <h6>{props.pageMainTitle}</h6>
                            <h1>{props.bannerTitle}</h1>
                            <p>{props.bannerDesc}</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <span><Link to="/" className="btn btn-lg btn-primary me-2">See More</Link></span>
                                {/* <span><Link to="/" className="btn btn-lg btn-outline-primary">About Us</Link></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </BannerBox>
        </>
    )
}

export default BannerSection;