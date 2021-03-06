import React from 'react';
import styled from 'styled-components';

const Unnati_content = () => {
  return (
    <Content_container>
      <Image>
        <img src={require('../images/Ellipse.png')} alt='' />
      </Image>
      <Circle />
      <Text>
        <p>badarpur</p>
      </Text>
    </Content_container>
  );
};

export default Unnati_content;

export const Content_container = styled.div`
  position: relative;
  padding-bottom: 50px;
`;
export const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  background: #f3cf4f;
  margin: 0px auto;
  z-index: 5;
`;

export const Image = styled.div`
  position: absolute;
  top: 70px;
  left: 300px;
  img {
    width: 300px;
  }
`;
export const Text = styled.div`
  position: absolute;
  top: 130px;
  right: 60px;
  width: 40%;
`;
