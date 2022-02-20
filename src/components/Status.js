import React from 'react';
import styled from 'styled-components';

const Status = ({ black, pd, fig, description, img }) => {
  return (
    <SubContent pd={pd} black={black}>
      <Div>
        <img src={img} alt='' />
        <Div2>
          <h1>{fig}</h1>
          <h2>{description}</h2>
        </Div2>
      </Div>
    </SubContent>
  );
};

export default Status;

export const SubContent = styled.div`
  color: ${({ black }) => (black ? `${black}` : '#fff')};
  padding: 100px 50px;
  height: 100%;
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
  text-align: center;
  height: 170px;

  h2 {
    font-size: 16px;
  }

  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
`;

export const Div2 = styled.div`
  height: 250px;
  margin-top: 30px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
