import React from 'react';
import Bussiness_model from '../components/Bussiness_model';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import ImgSlider from '../components/ImgSlider';
import Unnati_content from '../components/Unnati_content';
import Unnati_hero from '../components/Unnati_hero';
import Unnati_main from '../components/Unnati_main';
import Unnati_subcontent from '../components/Unnati_subcontent';
import { slider_unnati } from '../data_unnati';
import { business_unnati } from '../data_unnati';

const Unnati = () => {
  return (
    <div>
      <Unnati_hero />
      <Unnati_main />
      {/* <Unnati_content /> */}
      <ImageSlider />
      <Unnati_subcontent />
      <Bussiness_model
        contents={business_unnati}
        bgColor='#fffbea'
        black={true}
      />
      <ImgSlider imgs={slider_unnati} />
      <Footer />
    </div>
  );
};

export default Unnati;
