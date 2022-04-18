import React from 'react';
import Bussiness_model from '../components/Bussiness_model';
import Footer from '../components/Footer';
import ImgSlider from '../components/ImgSlider';
import Swajal_hero from '../components/Swajal_hero';
import Swajal_main from '../components/Swajal_main';
import { slider_swajal } from '../data_swajal';
import { business_swajal } from '../data_swajal';

export const Swajal = () => {
  return (
    <div>
      <Swajal_hero />
      <Swajal_main />
      <Bussiness_model
        contents={business_swajal}
        bgColor='linear-gradient(
    180deg,
    rgba(10, 153, 255, 1) 0%,
    rgba(37, 168, 255, 1) 20%,
    rgba(74, 183, 255, 1) 60%
  )'
      />
      <ImgSlider imgs={slider_swajal} />
      <Footer />
    </div>
  );
};
