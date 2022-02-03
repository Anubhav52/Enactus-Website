import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Container>
        <Content>EnactusDTU</Content>

        <Flex>
          <Column_i>
            <i class='far fa-envelope-open'></i>
            <i class='fas fa-phone-square-alt'></i>
            <i class='fas fa-map-marker'></i>
          </Column_i>
          <Column_a>
            <div>enactusdtu@gmail.com </div>
            <div> 987123456</div>
            <div> DTU, Rohini, Delhi </div>
          </Column_a>

          <Column_b>
            <div>
              {' '}
              <a href='https://www.linkedin.com/company/enactus-dtu/mycompany/'>
                {' '}
                Linkedin{' '}
              </a>
            </div>
            <div>
              {' '}
              <a href='https://www.instagram.com/enactusdtu/'> Instagram </a>
            </div>
            <div>
              {' '}
              <a href='https://plus.enactus.org/s/?language=en_US'>
                {' '}
                Enactus Plus{' '}
              </a>{' '}
            </div>
          </Column_b>
        </Flex>
      </Container>
    </>
  );
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  color: white;
  background-color: black;
`;

export default Footer;

export const Column_a = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  div {
    padding: 10px;
  }
`;

export const Column_b = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  text-align: right;
  div {
    padding: 10px;
  }
`;

export const Column_i = styled.div`
  display: flex;
  flex-direction: column;
  width: 8%;
  color: #ffca7b;

  i {
    padding: 15px;
  }
`;

export const Content = styled.div`
  font-size: 40px;
  font-weight: 400;
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  font-size: 20px;
`;
