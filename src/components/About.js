import React from 'react';
import Card from './Cards/Card';
// import { data } from './data';
import './About.css';
function About() {
  return (
    <div style={{ marginTop: '10rem', marginLeft: 'auto' }}>
      <section id='about' className='about section-bg'>
        <div className='container-fluid mt-5' data-aos='fade-up'>
          <span className='council-heading' style={{ marginLeft: '35%' }}>
            COUNCIL' 21
          </span>

          <div className='row'>
            {/* {data.map((people) => {
              const { id, name, title, img, line, insta, linkedin } = people;
              return (
                <Card
                  name={name}
                  title={title}
                  img={img}
                  line={line}
                  linkedin={linkedin}
                  insta={insta}
                />
              );
            })} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
