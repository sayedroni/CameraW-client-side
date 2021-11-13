import React from 'react';
import Aboutus from '../About/Aboutus';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Collection from '../OurCollection/Collection';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Collection></Collection>
            <Review></Review>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    );
};

export default Home;