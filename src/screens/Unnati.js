import React from 'react';
import Foot from '../components/Foot';
import ImageSlider from '../components/ImageSlider';
import Unnati_content from '../components/Unnati_content';
import Unnati_hero from '../components/Unnati_hero';
import Unnati_main from '../components/Unnati_main';
import Unnati_subcontent from '../components/Unnati_subcontent';

const Unnati = () => {
  return (
    <div>
      <Unnati_hero />
      <Unnati_main />
      {/* <Unnati_content /> */}
      <ImageSlider />
      <Unnati_subcontent />
      <Foot />
    </div>
  );
};

export default Unnati;
