import React from 'react';
import styled from 'styled-components';
import skew_Img from '../images/skew2.svg';
import { unnati_data } from '../data_unnati';

const Unnati_main = () => {
  const { need } = unnati_data;
  return (
    <main_box>
      <Unnati_skew>
        <h1>Need of Project</h1>
        <p>{need}</p>
      </Unnati_skew>
    </main_box>
  );
};

export default Unnati_main;

export const main_box = styled.div`
  height: 100%;
`;

export const Unnati_skew = styled.div`
  height: 700px;
  background: url(${skew_Img});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  h1 {
    position: absolute;
    top: 130px;
    right: 100px;
    font-size: 70px;
    text-align: right;
  }

  p {
    width: 55%;
    position: absolute;
    top: 270px;
    left: 100px;
    font-size: 18px;
  }
`;
