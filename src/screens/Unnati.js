import React from 'react';
import ImageSlider from '../components/ImageSlider';
import Unnati_content from '../components/Unnati_content';
import Unnati_hero from '../components/Unnati_hero';
import Unnati_main from '../components/Unnati_main';

const Unnati = () => {
  return (
    <div>
      <Unnati_hero />
      <Unnati_main />
      {/* <Unnati_content /> */}
      <ImageSlider />
    </div>
  );
};

export default Unnati;
