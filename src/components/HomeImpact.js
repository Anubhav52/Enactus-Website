import React from 'react';
import styled from 'styled-components';
import img from '../images/20.svg';

const HomeImpact = () => {
  return (
    <Impact>
      <Impact_Row1>
        <img src={img} alt='' />
        <h1>Entrepreneurs</h1>
      </Impact_Row1>
      <Impact_Row2>
        <Col1>
          <h1>74447</h1>
          <h2>House Impacted</h2>
        </Col1>
        <Col2>
          <h1>74447</h1>
          <h2>House Impacted</h2>
        </Col2>
      </Impact_Row2>
    </Impact>
  );
};

export default HomeImpact;

const Impact = styled.div`
  height: 100%;
  background: #fefbf1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  h1 {
    font-size: 50px;
    margin-top: -40px;
    margin-left: 15px;
  }
  img {
    width: 400px;
  }
`;

const Impact_Row1 = styled.div``;
const Impact_Row2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 110px;
  width: 100%;
`;

const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 90px;
  }
`;
const Col2 = styled(Col1)``;
