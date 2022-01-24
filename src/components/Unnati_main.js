import React from 'react';
import styled from 'styled-components';
import skew_Img from '../images/skew2.svg';

const Unnati_main = () => {
  return (
    <main_box>
      <Unnati_skew>
        <h1>Need of Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit
          tenetur omnis, officiis similique unde expedita tempora. Placeat sed
          rerum modi perspiciatis corrupti labore hic iure nulla recusandae
          sapiente, fugiat quidem corporis quae cum nesciunt dolorem facilis
          quis aut. Dolores praesentium laudantium recusandae soluta doloremque,
          sunt ratione perspiciatis. Animi exercitationem error ex ut qui.
          Molestias nihil impedit architecto sit minus.
        </p>
      </Unnati_skew>
    </main_box>
  );
};

export default Unnati_main;

export const main_box = styled.div`
  height: 100%;
`;

export const Unnati_skew = styled.div`
  height: 650px;
  background: url(${skew_Img});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  h1 {
    position: absolute;
    top: 170px;
    right: 100px;
    font-size: 70px;
    text-align: right;
  }

  p {
    width: 50%;
    position: absolute;
    top: 300px;
    left: 100px;
  }
`;
