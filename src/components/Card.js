import React from 'react';
import styled from 'styled-components';

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
  width: 320px;
  height: 320px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 80px;
  /* margin-bottom: 20px; */
  margin-top: -10px;
  /* position: absolute;
  top: 70px;
  left: 300px; */
`;
const Text = styled.div`
  margin-right: 10px;

  h2 {
    font-size: 40px;
  }
`;

const Card = ({ text, img }) => {
  return (
    <CARD>
      <Image url={img} />
      <Text>
        <h1>{text}</h1>
        <h2>Cafe</h2>
      </Text>
    </CARD>
  );
};

export default Card;
