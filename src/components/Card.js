import React from 'react';
import styled from 'styled-components';
import img from '../images/Ellipse.png';

const CARD = styled.div`
  background-color: transparent;
  color: black;
  /* height: 300px;
  width: 600px; */
  margin-top: calc(5rem + 5vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-right: 10px;
  padding-left: 100px;
  cursor: pointer;
`;
const Image = styled.div`
  width: 300px;
  height: 300px;
  background: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 80px;
  /* position: absolute;
  top: 70px;
  left: 300px; */
`;
const Text = styled.h4`
  /* position: absolute;
  top: 130px;
  right: 60px; */
  width: 400px;
  font-size: 15px;
`;

const Card = ({ text }) => {
  //   const Avatar = require(`../../assets/${image}.jpg`).default;
  return (
    <CARD>
      <Image />
      <Text>
        <p>{text}</p>
      </Text>
    </CARD>
  );
};

export default Card;
