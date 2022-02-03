import React from 'react';
import styled from 'styled-components';

const Milan_site = () => {
  return (
    <Container>
      <Row1>
        <h2>JOINED HANDS WITH</h2>
        <h1>
          ENACTUS <span>SOUTHAMPTON</span>
        </h1>
      </Row1>
      <Row2>
        <img src={require('../images/milan_site1.png')} alt='' />
        <Content>
          <p>
            Project Milan is a collaboration between Enactus DTU and Enactus
            Southampton. The goal of the project is to use aquaponic technology
            to increase agricultural efficiency while lowering water use.The
            partnership helps in providing accreditation for a course on
            aquaponics and the relevance of water sustainability for farmers and
            schoolchildren, or assisting in the application for accreditation.
          </p>
        </Content>
      </Row2>
    </Container>
  );
};

export default Milan_site;

export const Container = styled.div`
  height: 100%;
  background: #fff;
  color: #000;
  padding-bottom: 400px;
`;
export const Row1 = styled.div`
  margin: 80px 0 50px 30px;
  line-height: 1;

  h2 {
    color: rgb(59, 59, 59);
  }
  h1 {
    color: #e2b43b;
    font-size: 50px;

    span {
      color: #000;
    }
  }
`;
export const Row2 = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 500px;
    object-fit: contain;
    margin: 0 auto;
    z-index: 11;
    border-radius: 20px;
  }
`;
export const Content = styled.div`
  position: absolute;
  bottom: 100px;
  right: 0;
  top: 200px;
  z-index: 10;
  background: #e2b43b;
  color: #fff;
  width: 60%;
  padding: 200px 70px;
  border-radius: 100px 0 0 100px;
`;
