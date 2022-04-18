import React from 'react';
import styled from 'styled-components';
import skew_Img from '../images/skew3.svg';
import { unnati_data } from '../data_unnati';

const Unnati_subcontent = () => {
  const { need } = unnati_data;
  return (
    <main_box>
      <Unnati_sub_skew>
        <Row>
          <Div_Unn>
            <img src='https://i.imgur.com/DxEmoXp.png' alt='' />
            <p>
              Instant doubt clearance via chat box functionalities by linking
              the Unnati community
            </p>
          </Div_Unn>
          <Div_Unn>
            <img src='https://i.imgur.com/snCIcP9.png' alt='' />
            <p>
              Guidance and discussions forums to connect past and present Unnati
              students
            </p>
          </Div_Unn>
          <Div_Unn>
            <img src='https://i.imgur.com/agfDtdB.png' alt='' />
            <p>
              Certification of completion provided after the course is completed
            </p>
          </Div_Unn>
          <Div_Unn>
            <img src='https://i.imgur.com/oIwGpPX.png' alt='' />
            <p>
              Interactive content combined with automated assessment, evaluation
              and fee collection
            </p>
          </Div_Unn>
        </Row>
      </Unnati_sub_skew>
    </main_box>
  );
};

export default Unnati_subcontent;

export const main_box = styled.div`
  height: 100%;
`;

export const Unnati_sub_skew = styled.div`
  height: 600px;
  background: url(${skew_Img});
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;

  h3 {
    font-size: 20px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: space-between;
  align-items: center;
  position: absolute;
  top: 120px;
  padding: 0px 60px;
  height: 500px;
`;

const Div_Unn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    margin-bottom: 30px;
  }
  :not(:last-child) {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px dashed black;
  }

  height: 275px;
`;
