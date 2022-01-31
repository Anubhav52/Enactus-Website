import React from 'react';
import Bussiness_model from '../components/Business_model';
import Home from '../components/Home';
import Timeline from '../components/Timeline';
import Timeline_slides from '../components/Timeline_slides';

const HomeScreen = () => {
  return (
    <div>
      <Home />
      <Bussiness_model />
      <Timeline />
      <Timeline_slides />
      <Bussiness_model />
    </div>
  );
};

export default HomeScreen;
