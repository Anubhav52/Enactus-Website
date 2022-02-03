import React from 'react';
import styled from 'styled-components';
import Status from './Status';
import Swajal_waves from './Swajal_waves';
import { swajal_data, impact } from '../data_swajal';

const Swajal_main = () => {
  const { need } = swajal_data;

  return (
    <>
      <Swajal_waves />
      <Main_container>
        <Main_content>
          <h1>Need Of the Project</h1>
          <p>{need}</p>
        </Main_content>
        {/* <Status black='#000' /> */}
        <Stats>
          {impact.map((ele) => {
            const { id, fig, description, img } = ele;
            return (
              <Status
                black='#000'
                id={id}
                fig={fig}
                description={description}
                img={img}
              />
            );
          })}
        </Stats>
      </Main_container>
    </>
  );
};
export default Swajal_main;

export const Main_container = styled.div`
  background: rgb(0, 153, 255);
  background: linear-gradient(
    180deg,
    rgba(0, 153, 255, 1) 0%,
    rgba(37, 168, 255, 1) 20%,
    rgba(74, 183, 255, 1) 40%,
    rgba(255, 255, 255, 1) 85%
  );
  color: white;
  text-align: center;
  align-content: center;
  font-family: 'Inter';
  padding-bottom: 90px;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
`;

export const Main_content = styled.div`
  h1 {
    font-size: 60px;
    padding-top: 10vh;
  }
  p {
    font-size: 22px;
    padding-top: 30px;
    margin-left: 120px;
    margin-right: 120px;
    padding-bottom: 30px;
  }
`;
