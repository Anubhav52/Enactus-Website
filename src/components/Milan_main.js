import React from 'react';
import styled from 'styled-components';
import svg from '../images/export svg.svg';
import Status from './Status';

const Milan_main = () => {
  return (
    <Container>
      <Content>
        <h1>
          Project
          <br></br>
          <span>Milan</span>
        </h1>
        <Row>
          <Col1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              atque repellat optio possimus mollitia eligendi vero, quibusdam
              corporis cum sed delectus voluptatibus officia ducimus, illum
              maiores sit dolore nesciunt amet itaque! Dolores iste quidem
              incidunt, molestias fuga nostrum aliquam ut facere vero,
              voluptates deleniti a, doloribus quisquam minus soluta ullam.
            </p>
          </Col1>
          <Col2>
            <img src={svg} alt='' />
          </Col2>
        </Row>
      </Content>
      <Status />
    </Container>
  );
};

export default Milan_main;

export const Container = styled.div`
  height: 100%;
  background: #151515;
  color: #fff;
  padding-top: 50px;
`;

export const Content = styled.div`
  background: #000;
  padding-top: 100px;
  height: 100vh;
  border-radius: 0 200px 126px 0;
  position: relative;
  padding-left: 50px;

  h1 {
    font-size: 50px;
    line-height: 1.2;
  }

  span {
    font-size: 85px;
    color: #40d32e;
  }
`;
export const Row = styled.div`
  display: flex;
`;
export const Col1 = styled.div`
  p {
    width: 57%;
    font-size: 20px;
    margin-top: 80px;
  }
`;
export const Col2 = styled.div`
  img {
    width: 400px;
    object-fit: contain;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
