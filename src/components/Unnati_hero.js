import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import bg_Img from '../images/unnati_web.svg';
import Status from './Status';
import { unnati_data, impact_unnati } from '../data_unnati';
import { Stats } from './Swajal_main';

const Unnati_hero = () => {
  return (
    <Unnati_main>
      <Unnati_container>
        <Navbar
          img={require('../images/blackenactusLogo.png')}
          light='light'
          color='#000'
          logo={'https://i.imgur.com/N9vdBmY.png'}
        />
        <Showcase />
        <Unnati_div>
          <Unnati_content>
            <h1>
              Project<br></br>Unnati
            </h1>
            <p>
              We believe in the dictum <span> ‘Knowledge is Power’ </span> and
              aim to use this power to transform the lives of urban slum
              dwellers. This is where
              <span> PROJECT UNNATI </span> comes in. We work towards digital
              literacy, employment opportunities, training and ensure that each
              and every person is able to benefit the maximum out of the
              services we offer. We set up multipurpose cafes in rural and
              suburban areas. These Unnati cafes act as the nodal agencies which
              implement our programs and courses, each independently maintained
              by our entrepreneurs."
            </p>
          </Unnati_content>
          <Unnati_demo>
            <img src={bg_Img} alt='' />
          </Unnati_demo>
        </Unnati_div>
      </Unnati_container>
      <Stats>
        {impact_unnati.map((ele) => {
          const { id, fig, description, img } = ele;
          return (
            <Status
              pd={'150px'}
              black='#000'
              id={id}
              fig={fig}
              description={description}
              img={img}
            />
          );
        })}
      </Stats>
    </Unnati_main>
  );
};

export default Unnati_hero;

export const Unnati_main = styled.div`
  height: 100%;
  position: relative;
  z-index: 0 !important;
`;

export const Unnati_container = styled.div`
  height: 100%;
  background-color: #fff;
  color: #000;
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
    z-index: 0;
    margin-left: 90px;
    font-size: 120px;
    font-weight: 600;
  }

  p {
    padding-top: 80px;
    width: 50%;
    margin-left: 90px;
    font-size: 20px;
  }

  span {
    font-size: 25px;
    color: #e2b43b;
    font-weight: 550;
  }
`;

export const Unnati_demo = styled.div`
  position: absolute;
  top: 80px;
  right: 0;
  z-index: 0;
  img {
    width: 600px;
    object-fit: contain;
  }
`;
