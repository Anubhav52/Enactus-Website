import React from 'react';
import Navbar from '../components/Navbar';
import './About.css';
import { data } from '../data';
import Council_Card from './Council_Card';

const About = () => {
  return (
    <div className='about-container'>
      <Navbar img={require('../images/blackenactusLogo.png')} color='#d69f00' />
      <div className='about-content'>
        <div className='col1'>
          <h1>Council 20'21</h1>
        </div>
        <div className='col2'>
          {data.map((people) => {
            const { id, name, title, img, line, insta, linkedin } = people;
            return (
              <Council_Card
                name={name}
                title={title}
                img={img}
                line={line}
                linkedin={linkedin}
                insta={insta}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
