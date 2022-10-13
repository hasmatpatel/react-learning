import React from 'react'
import BannerSection from '../components/sections/BannerSection';
// import HeroSlider from "../components/sections/HeroSlider";

const Home = () => {
    
    const data = {
        pageMainTitle : "Home",
        bannerTitle : "Neque porro quisquam est qui dolorem ipsum quia...",
        bannerDesc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus lorem vitae ligula suscipit, ut rutrum massa bibendum. Aenean mollis nibh ipsum...",
        bannerImg : "./images/img02.jpg",
    };

    return (
        <>
            <BannerSection className="homeBanner" {...data} />
            {/* <HeroSlider /> */}
        </>
    );
};

export default Home;