import React, { useRef, useState } from "react";
import BannerSection from '../components/sections/BannerSection';

const About = () => {
    const data = {
        pageMainTitle : "About",
        bannerTitle : "I'm User Interface Designer & Developer.",
        bannerDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus lorem vitae ligula suscipit, ut rutrum massa bibendum. Aenean mollis nibh ipsum...",
        bannerImg : "./images/img01.jpg",
    };

    return (
        <>
            <BannerSection className="aboutBanner" {...data} />
        </>
    );
};

export default About;