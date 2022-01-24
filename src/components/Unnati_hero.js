import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import bg_Img from '../images/unnati_web.svg';
import Status from './Status';

const Unnati_hero = () => {
  return (
    <Unnati_main>
      <Unnati_container>
        <Navbar />
        <Showcase />
        <Unnati_div>
          <Unnati_content>
            <h1>
              Project<br></br>Unnati
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, asperiores officiis nulla ipsa ipsum ullam,
              reprehenderit, hic amet eum perspiciatis eius provident laboriosam
              pariatur ea adipisci tempora illum facere tenetur minima vero
              voluptates? Recusandae placeat molestiae labore unde beatae ullam
              fugiat velit. Tempore dolores quisquam autem illum sapiente,
              accusantium nisi dolorem ab fugit. Temporibus voluptatibus nihil
              ea soluta ab at consequuntur. Animi unde praesentium obcaecati
              laborum porro quos consectetur magnam.
            </p>
          </Unnati_content>
          <Unnati_demo>
            <img src={bg_Img} alt='' />
          </Unnati_demo>
        </Unnati_div>
      </Unnati_container>
      <Status pd={'40px'} />
    </Unnati_main>
  );
};

export default Unnati_hero;

export const Unnati_main = styled.div`
  height: 100%;
  position: relative;
`;

export const Unnati_container = styled.div`
  height: 100vh;
  background-color: #fff;
  color: #000;
  margin-bottom: 230px;
`;

export const Showcase = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(255, 209, 67, 1) 0%,
    rgba(255, 145, 83, 1) 90%
  );
  clip-path: polygon(0 0, 100% 0%, 100% 45%, 0 90%);
`;

export const Unnati_div = styled.div`
  display: flex;
  position: relative;
`;
export const Unnati_content = styled.div`
  height: 100%;
  h1 {
    padding-top: 180px;
    position: relative;
    z-index: 10;
    margin-left: 90px;
    font-size: 120px;
    font-weight: 600;
  }

  p {
    padding-top: 80px;
    width: 50%;
    margin-left: 90px;
  }
`;
export const Unnati_demo = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 10;
  img {
    width: 600px;
    object-fit: contain;
  }
`;
