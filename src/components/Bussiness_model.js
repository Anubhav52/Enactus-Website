import React from 'react';
import styled from 'styled-components';

const Bussiness_model = ({ contents, bgColor, black }) => {
  return (
    <Bus_Container bgColor={bgColor} black={black}>
      <h1>BUSINESS MODEL</h1>
      <Bussiness_Row>
        {contents.map((content) => (
          <Bus_content>
            <Content>
              <Row>
                <h1>{content.id}</h1>
                <img src={content.img} alt='' />
              </Row>
              <Text>
                <h2>{content.name}</h2>
                <p>{content.description}</p>
              </Text>
            </Content>
          </Bus_content>
        ))}
      </Bussiness_Row>
    </Bus_Container>
  );
};

export default Bussiness_model;

const Bus_Container = styled.div`
  height: 100vh;
  background: ${(props) => props.bgColor};
  color: ${(props) => (props.black ? '#000' : '#fff')};
  position: relative;

  h1 {
    position: absolute;
    top: 120px;
    left: 40px;
  }
`;
const Bus_content = styled.div`
  position: relative;
  height: 100%;
  padding-left: 40px;

  p {
    width: 80%;
    margin-top: 50px;
  }

  &::before {
    content: '';
    position: absolute;
    height: 0.03472vw;
    background: #ffca7b;
    min-height: 1px;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin-top: 110px;
`;
const Text = styled.div`
  width: 60%;
  margin-top: 70px;
`;

const Row = styled.div`
  position: relative;
  height: 100%;

  h1 {
    top: 70px;
    left: 0;
  }
  img {
    width: 160px;
    position: absolute;
    top: 100px;
    left: 100px;
  }
`;

const Bussiness_Row = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  /* width: 100%; */
  height: 100%;
  position: relative;
  padding-top: 60px;

  /* &::before {
    content: '';
    height: 0.03472vw;
    min-height: 1px;
    position: absolute;
    color: #fff;
    background: #fff;
    width: 200vw;
    left: 0;
    top: 150px;
  } */

  &::-webkit-scrollbar {
    display: none;
  }
`;
