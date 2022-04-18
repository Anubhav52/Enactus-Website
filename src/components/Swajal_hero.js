import React from 'react';
import styled from 'styled-components';
import svg_1 from '../images/image 6.svg';
import svg_2 from '../images/image 7.svg';
import svg_3 from '../images/image 8.svg';
import Navbar from '../components/Navbar';
import { swajal_data } from '../data_swajal';

const Swajal_hero = () => {
  const { about } = swajal_data;

  return (
    <Swajal_container>
      <Navbar
        img={require('../images/blackenactusLogo.png')}
        color='#0099ff'
        logo={'https://i.imgur.com/oLCymq6.png'}
      />
      <Row1>
        <Swajal_content>
          <h1>
            PROJECT <span>SWAJAL</span>
          </h1>
          <p>{about}</p>
        </Swajal_content>

        <Swajal_images>
          <Image1>
            <img src={svg_1} alt='' />
          </Image1>
          <Image2>
            <img src={svg_2} alt='' />
          </Image2>
          <Image3>
            <img src={svg_3} alt='' />
          </Image3>
          <Image4>
            <img src='https://i.imgur.com/uabOR0q.png' alt='' />
          </Image4>
          <Image5>
            <img src='https://i.imgur.com/F3vFh8O.png' alt='' />
          </Image5>
          <Image6>
            <img src='https://i.imgur.com/YLxudEr.png' alt='' />
          </Image6>
        </Swajal_images>
      </Row1>
    </Swajal_container>
  );
};

export default Swajal_hero;

export const Nav = styled.div`
  height: 10vh;
  background: #318ce7;
  color: #fff;
`;

export const Swajal_container = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;
`;
export const Row1 = styled.div`
  display: flex;
`;

export const Swajal_content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-left: 50px;
  width: 50vw;
  line-height: 1.2;
  margin-right: 20px;

  h1 {
    font-size: 60px;
    color: #187895;
    line-height: 1.2;
    font-weight: 600;

    span {
      font-size: 100px;
      font-weight: 700;
    }
  }
  p {
    font-size: 20px;
    width: 45vw;
    line-height: 1.5;
    margin-top: 50px;
  }
`;

export const Swajal_images = styled.div`
  height: 80vh;
  position: relative;
  z-index: 0;
`;

export const Image1 = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 30px;
    left: 100px;
    width: 350px;
    object-fit: contain;
    z-index: 0;
  }
`;
export const Image2 = styled.div`
  img {
    position: absolute;
    top: 25px;
    left: 50px;
    width: 140px;
    object-fit: contain;
    z-index: 1;
  }
`;
export const Image3 = styled.div`
  img {
    position: absolute;
    bottom: -40px;
    left: 50px;
    width: 100px;
    object-fit: contain;
    z-index: 1;
  }
`;
export const Image4 = styled.div`
  img {
    position: absolute;
    bottom: -30px;
    left: 180px;
    width: 270px;
    object-fit: contain;
    z-index: 10;
  }
`;

export const Image5 = styled.div`
  img {
    position: absolute;
    top: 60px;
    left: 250px;
    width: 150px;
    object-fit: contain;
    z-index: 10;
  }
`;

export const Image6 = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 160px;
    left: -20px;
    width: 200px;
    object-fit: contain;
    z-index: 10;
  }
`;
