import React from 'react';
import Bussiness_model from '../components/Bussiness_model';
import Home from '../components/Home';
import Timeline from '../components/Timeline';
import Timeline_slides from '../components/Timeline_slides';
import Footer from '../components/Footer';
import HomeImpact from '../components/HomeImpact';
import { business_landing } from '../data_landing';

const HomeScreen = () => {
  return (
    <div>
      <Home />
      <HomeImpact />
      <Bussiness_model contents={business_landing} bgColor='#000' />
      <Timeline_slides />
      <Footer />
    </div>
  );
};

export default HomeScreen;
