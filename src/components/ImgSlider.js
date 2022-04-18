import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = ({ imgs }) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };
  return (
    <Car_Container>
      <Carousel {...settings} style={{ margin: '0px' }}>
        {imgs.map((img) => (
          <Wrap>
            <img src={img.src} alt='' />
          </Wrap>
        ))}
      </Carousel>
    </Car_Container>
  );
};

export default ImgSlider;

const Car_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 0px;
  margin: 20px 0px;
  overflow: hidden;
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  width: 100vw;
  height: 390px;
  position: relative;

  ul li button {
    &:before {
      font-size: 10px;
      color: red;
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-prev:before {
    color: #fff;
    font-size: 1.5rem;
    margin-right: 3rem;
    position: absolute;
    top: 50%;
    left: 50px;
  }
  /* .slick-slide {
    margin-right: 10px;
  } */
  .slick-next:before {
    color: #fff;
    font-size: 1.5rem;
    margin-left: 2.5rem;
    position: absolute;
    top: 50%;
    right: 50px;
  }
  button {
    z-index: 1;
  }
  & > button {
    opacity: 10;
    height: 100%;
    width: 5vw;
    z-index: 1;
    color: red;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease;
    }
  }
`;
const Wrap = styled.div`
  cursor: pointer;

  img {
    width: 390px;
    height: 390px;
    object-fit: cover;
    border-radius: 20px;
    transition-duration: 300ms;
  }
`;
