import React from 'react';
import wave_1 from '../images/Vector (1).svg';
import wave_2 from '../images/Vector.svg';
import styled from 'styled-components';

const Swajal_waves = () => {
  return (
    <>
      <Container_wave>
        <Image_1>
          <img src={wave_1} alt='' />
        </Image_1>
        <Image_2>
          <img src={wave_2} alt='' />
        </Image_2>
      </Container_wave>
    </>
  );
};

export default Swajal_waves;

export const Container_wave = styled.div`
  position: relative;
  margin-bottom: 230px;
  margin-top: 70px;
  width: 100%;
`;
export const Image_1 = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  z-index: 5;

  img {
    width: 100%;
    object-fit: contain;
  }
`;
export const Image_2 = styled.div`
  position: absolute;
  top: -30px;
  left: 0px;
  right: 0;
  bottom: 0;
  z-index: 4;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
