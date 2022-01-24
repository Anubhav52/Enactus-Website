import React from 'react';
import styled from 'styled-components';

const Bussiness_model = () => {
  return (
    <Bus_Container>
      <Bus_content>
        <h1>BUSINESS MODEL</h1>
        <Content>
          <h1>01</h1>
          <Text>
            <h2>Ideation</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              asperiores adipisci rerum cum, suscipit, dolorum sapiente
              provident culpa odit earum, nesciunt ipsum et? Quae, ipsum aperiam
              quisquam velit, libero enim voluptatem possimus voluptates atque
              eligendi facere sunt molestiae. Illo, doloremque.
            </p>
          </Text>
        </Content>
      </Bus_content>
    </Bus_Container>
  );
};

export default Bussiness_model;

const Bus_Container = styled.div`
  height: 100vh;
  background: #000;
  color: #fff;
  padding: 150px 40px 0 40px;
`;
const Bus_content = styled.div`
  position: relative;

  h1 {
    padding-top: 50px;
  }

  &::before {
    content: '';
    height: 0.03472vw;
    background: yellow;
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
`;
const Text = styled.div`
  width: 60%;
  margin-top: 70px;
`;
