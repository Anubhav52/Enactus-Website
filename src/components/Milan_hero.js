import React from 'react';
import styled from 'styled-components';
import bg_img from '../images/unnati_bg.svg';
import Navbar from '../components/Navbar';

const Milan_hero = () => {
  return (
    <Milan_container>
      <Navbar
        img={require('../images/enactusLogo.png')}
        color='#40d32e'
        light='light'
        logo={'https://i.imgur.com/lUHsc8Y.png'}
      />
      <Milan_content>
        <h1>
          Hello I'm <br></br>a Farmer
        </h1>
        <img src={require('../images/Group 54.png')} alt='' />
        <p>
          With more than half of the country's population working in
          agriculture, India is heavily reliant on Mother Nature for income and
          jobs. Raw material, tool, and additive prices have soared, resulting
          in larger investments, but deteriorating crop quality has resulted in
          more losses. Chemical fertilisers have also burned a hole in the
          farmer's pocket while crippling the soil. Currently, over 52% of
          agricultural households are in debt and have difficulty earning enough
          to fulfil their basic needs.
        </p>
      </Milan_content>
    </Milan_container>
  );
};

export default Milan_hero;

export const Milan_container = styled.div`
  height: 100vh;
  background: #151515;
  color: #fff;
`;

export const Nav = styled.div`
  height: 10vh;
  background: #000;
`;

export const Milan_content = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  height: 90vh;
  overflow: hidden;
  background-image: url(${bg_img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 500px;
  position: relative;

  img {
    position: absolute;
    width: 350px;
    margin-top: 40px;
    top: 40%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-55%, -40%);
    object-fit: contain;
  }

  h1 {
    color: #40d32e;
    font-size: 75px;
    font-weight: 600;
    position: absolute;
    top: 10%;
    left: 90px;
    z-index: 10;
  }

  p {
    position: absolute;
    top: 45%;
    right: 80px;
    width: 35%;
  }
`;
