import React from 'react';
import './Council_Card.css';
import styled from 'styled-components';

const Council_Card = ({ name, title, img, line, insta, linkedin }) => {
  return (
    <C_Card img={img} className='c-card'>
      <Card_Content className='card-content'>
        <Card_Name className='card-name'>
          <h2>{name}</h2>
        </Card_Name>
        <Card_Title className='card-title'>
          <h3>{title}</h3>
        </Card_Title>
        <Card_Body>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            eius aliquam autem facilis impedit quod totam provident maiores quas
            omnis?
          </p>
        </Card_Body>
        <Social>
          <a href='/' class='button'>
            <i class='fab fa-instagram'></i>
          </a>
          <a href='/' class='button'>
            <i class='fab fa-linkedin'></i>
          </a>
        </Social>
      </Card_Content>
    </C_Card>
  );
};

export default Council_Card;

const C_Card = styled.div`
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-size: cover;
  color: #fff;
  overflow: hidden;
  border-radius: 5px;
  padding: 7rem 0 0;
  height: 300px;
  width: 95%;
  cursor: pointer;
`;
const Card_Content = styled.div`
  --padding: 1.5rem;
  padding: var(--padding);
  /* padding: 1.5em; */
  background: linear-gradient(
    hsl(0 0% 0% / 0.3),
    hsl(20 0% 0% /0.6) 20%,
    hsl(0 0% 0% / 1)
  );

  transform: translateY(70%);
  transition: transform 500ms ease-in-out;
`;
const Card_Name = styled.div`
  text-align: center;
  h2 {
    font-size: 35px;
  }
`;
const Card_Title = styled.div`
  position: relative;
  /* width: max-content; */
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
`;
const Card_Body = styled.div`
  p {
    color: rgb(255 255 255 / 0.9);
  }
`;
const Social = styled.div`
  font-size: 35px;

  a {
    color: #ffca7b;
    margin-right: 10px;
  }

  i {
    transition: all 200ms ease;
    &:hover {
      color: #fff;
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
