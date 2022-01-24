import React from 'react';
import styled from 'styled-components';

const Swajal_main = () => {
  return (
    <Main_container>
      <Main_content>
        <h1>Need Of the Project</h1>
        <p>
          {' '}
          LOREPSUM DOLORT AMET LOREM EPSUM DOLOR SIT AMET LOR EM EPM DOLOR SIT
          AMET LORSIT AMET LOREM EPSUR SIT AMLOREM EPSUM DOLOR SIT AMET LORM
          EPSUM DOLOR SIT LOREM EPSUM DOL IT AMET LOREMEPSUM DOLOR SI T AMET SUM
          DOLOR SIT AMET LOREM EPSUM DOLOR SIT AMET LOREM EP{' '}
        </p>
      </Main_content>
    </Main_container>
  );
};
export default Swajal_main;

export const Main_container = styled.div`
  background-color: #0099ff;
  color: white;
  text-align: center;
  align-content: center;
  font-family: 'Inter';
  padding-bottom: 90px;
`;
export const Main_content = styled.div`
  h1 {
    font-size: 60px;
    padding-top: 10vh;
  }
  p {
    font-size: 25px;
    padding-top: 30px;
    margin-left: 120px;
    margin-right: 120px;
  }
`;
