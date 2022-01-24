import React from 'react';
import styled from 'styled-components';
import bg_img from '../images/unnati_bg.svg';
import Navbar from './Navbar';

const Milan_hero = () => {
  return (
    <Milan_container>
      <Navbar />
      <Milan_content>
        <h1>
          Hello I'm <br></br>a Farmer
        </h1>
        <img src={require('../images/Group 54.png')} alt='' />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
          recusandae, quo eligendi rem aspernatur aut accusantium dignissimos.
          Ullam ea harum adipisci fugit, quia aliquid distinctio amet, voluptate
          natus eos voluptatum quas commodi ipsam nobis, obcaecati iste aut
          eligendi dolor nemo ut. Minima libero, voluptate praesentium cumque
          reprehenderit omnis debitis beatae.
        </p>
      </Milan_content>
    </Milan_container>
  );
};

export default Milan_hero;

export const Milan_container = styled.div`
  height: 100vh;
  background: #1a1c1e;
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
  background-size: 650px;
  position: relative;

  img {
    position: absolute;
    width: 350px;
    margin-top: 40px;
    /* margin-right: auto;
    margin-left: auto; */
    top: 50%;
    left: 50%;
    transform: translate(-60%, -50%);
    object-fit: contain;
  }

  h1 {
    color: #dbc36d;
    font-size: 75px;
    font-weight: 600;
    position: absolute;
    top: 10%;
    left: 90px;
    z-index: 10;
  }

  p {
    position: absolute;
    top: 60%;
    right: 80px;
    width: 35%;
  }
`;
