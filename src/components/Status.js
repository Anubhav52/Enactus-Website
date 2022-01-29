import React from 'react';
import styled from 'styled-components';

const Status = ({ black, pd, fig, description }) => {
  return (
    <SubContent pd={pd} black={black}>
      <Div style={{ marginTop: '-20px' }}>
        <img src={require('../images/img_1.png')} alt='' />
        <h1>{fig}</h1>
        <h2>{description}</h2>
      </Div>
      {/* <Div>
        <img src={require('../images/img_2.png')} alt='' />
        <h1>2X</h1>
        <h2>faster growth</h2>
      </Div>
      <Div>
        <img src={require('../images/img_3.png')} alt='' />
        <h1>2X</h1>
        <h2>faster growth</h2>
      </Div>
      <Div>
        <img src={require('../images/img_4.png')} alt='' />
        <h1>2X</h1>
        <h2>faster growth</h2>
      </Div> */}
    </SubContent>
  );
};

export default Status;

export const SubContent = styled.div`
  color: ${({ black }) => (black ? `${black}` : '#fff')};
  padding: 100px 50px;
  padding-bottom: ${({ pd }) => (pd ? `${pd}` : '100px')};
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-content: center; */
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 150px;

  img {
    width: 150px;
    object-fit: contain;
  }
`;
