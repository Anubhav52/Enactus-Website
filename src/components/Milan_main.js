import React from 'react';
import styled from 'styled-components';
import { impact_milan } from '../data_milan';
import svg from '../images/export svg.svg';
import Status from './Status';
import { Stats } from './Swajal_main';

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
              Project Milan promises better organic yield while simultaneously
              reducing labour and environmental impact. This will encourage
              farmers to adopt sustainable farming practises, resulting in
              higher market pricing. The main aim is to use aquaponic technology
              to increas e agricultural efficiency while lowering water use. The
              system will give farmers two cash streams while utilising 90% less
              water when it is fully operational. We hope to hold workshops on
              aquaponics and water management in the future so that farmers can
              run the system on their own.
            </p>
          </Col1>
          <Col2>
            <img src={svg} alt='' />
          </Col2>
        </Row>
      </Content>
      <Stats>
        {impact_milan.map((ele) => {
          const { id, fig, description, img } = ele;
          return (
            <Status
              pd={'150px'}
              id={id}
              fig={fig}
              description={description}
              img={img}
            />
          );
        })}
      </Stats>
    </Container>
  );
};

export default Milan_main;

export const Container = styled.div`
  height: 100%;
  background: #151515;
  color: #fff;
  padding-top: 80px;
`;

export const Content = styled.div`
  background: #000;
  padding-top: 100px;
  padding-bottom: 80px;
  height: 100%;
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
    font-size: 18px;
    margin-top: 50px;
  }
`;
export const Col2 = styled.div`
  img {
    width: 400px;
    object-fit: contain;
    position: absolute;
    bottom: 1px;
    right: 2px;
  }
`;
