import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import Card from './Card';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 5rem;
`;

const Carousal = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  h1 {
    font-size: 65px;
  }

  &::before {
    content: ' ';
    position: absolute;
    top: 80px;
    left: 300px;
    margin: 0 auto;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    background: #f3cf4f;
    z-index: 0;
  }

  @media only Screen and (max-width: 40em) {
    width: 90vw;
  }

  .slick-slider .slick-arrow:before {
    color: #000;
    font-size: 1.5rem;

    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #f3cf4f;
    font-size: 1rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Section>
      <Carousal>
        <Slider {...settings}>
          <Card text='Badarpur' img='https://i.imgur.com/O5uhwxg.png' />
          <Card text='Noida' img='https://i.imgur.com/7UCgVpq.png' />
          <Card text='Malviya Nagar' img='https://i.imgur.com/bpaRz4k.png' />
          <Card text='Laxmi Nagar' img='https://i.imgur.com/3eomSj5.png' />
          <Card text='Vasant Kunj' img='https://i.imgur.com/CabpIgp.png' />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default ImageSlider;
