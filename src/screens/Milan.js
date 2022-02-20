import React from 'react';
import ImgSlider from '../components/ImgSlider';
import Milan_hero from '../components/Milan_hero';
import Milan_main from '../components/Milan_main';
import Milan_site from '../components/Milan_site';
import { slider_milan } from '../data_milan';
import Footer from '../components/Footer';
import Bussiness_model from '../components/Bussiness_model';
import { business_milan } from '../data_milan';

const Milan = () => {
  return (
    <div>
      <Milan_hero />
      <Milan_main />
      <Milan_site />
      <Bussiness_model contents={business_milan} bgColor='#151515' />
      <ImgSlider imgs={slider_milan} />
      <Footer />
    </div>
  );
};

export default Milan;
