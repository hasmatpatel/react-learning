import React, { useRef, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";

//Img
import BannerImg01 from "../../assets/images/1.jpg";
import BannerImg02 from "../../assets/images/2.jpg";
import BannerImg03 from "../../assets/images/3.jpg";
import BannerImg04 from "../../assets/images/4.jpg";

const SwiperSlider = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
        margin: 0 0 2rem;
    }
  
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        min-height: 300px;

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;

            &.img-banner {
                height: 700px;
            }
        }
    }
    
    .swiper-pagination-bullet {
        background: var(--swiper-pagination-bullet-inactive-color,#fff);
        opacity: var(--swiper-pagination-bullet-inactive-opacity, .6);
    }

    .swiper-pagination-bullet-active {
        opacity: var(--swiper-pagination-bullet-opacity, 1);
        background: var(--swiper-pagination-color,var(--swiper-theme-color));
    }

    .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 20px;
    }

    .swiper-button-prev, .swiper-rtl .swiper-button-next {
        left: 20px;
    }

    .swiper-button-next, .swiper-rtl .swiper-button-prev {
        right: 20px;
    }

    --swiper-theme-color: #ffffff;
`;

const HeroSlider = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <Row>
                        <Col>
                            <SwiperSlider>
                                <Swiper
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide> <img src={BannerImg01} alt="img" className="img-fluid img-banner" /> </SwiperSlide>
                                    <SwiperSlide> <img src={BannerImg02} alt="img" className="img-fluid img-banner" /> </SwiperSlide>
                                    <SwiperSlide> <img src={BannerImg03} alt="img" className="img-fluid img-banner" /> </SwiperSlide>
                                    <SwiperSlide> <img src={BannerImg04} alt="img" className="img-fluid img-banner" /> </SwiperSlide>
                                </Swiper>
                            </SwiperSlider>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col lg={3} md={4}>
                            <Card className="w-100">
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Slider 1</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col lg={3} md={4}>
                            <Card className="w-100">
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Slider 2</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={4}>
                            <Card className="w-100">
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Slider 3</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={3} md={4}>
                            <Card className="w-100">
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Slider 4</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    );
};

export default HeroSlider;