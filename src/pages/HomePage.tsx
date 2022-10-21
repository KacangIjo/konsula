import React from 'react';
import HeroSection from '../components/Hero';
import Layout from '../features/Layout';
import HomeGrid from '../features/Home/HomeGrid';
import HomeVideo from '../features/Home/HomeVideo';
import HomeAction from '../features/Home/HomeAction';
import Testimonies from '../components/Testimonies';
import HomePricingTable from '../features/Home/HomePricingTable';
import HomeStepperJourney from '../features/Home/HomeStepperJourney';

const HomePage = () => {
    return (
        <>
            <Layout>
                <HeroSection/>
                <HomeGrid/>
                <HomePricingTable/>
                <HomeVideo/>
                <HomeStepperJourney/>
                <HomeAction/>
                <Testimonies/>
            </Layout>
        </>
    );
};

export default HomePage;
