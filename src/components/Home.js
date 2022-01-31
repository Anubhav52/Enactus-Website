import React, { useEffect } from 'react';
import './Home.css';
import big_logo from '../images/big_logo.svg';
import { gsap } from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.to('.text', {
      y: '0%',
      duration: 0.75,
      stagger: 0.25,
      ease: 'power1.out',
    });
    gsap.to('.slider', {
      y: '-100%',
      duration: 1.3,
      ease: 'power1.out',
      delay: 1.5,
    });
    gsap.to(
      '.intro',
      {
        y: '-100%',
        duration: 1,
        ease: 'power1.out',
      },
      '-=1'
    );
    gsap.to(
      '.hero-design',
      {
        x: '0%',
        duration: 1,
        ease: 'power1.out',
      },
      '-=1'
    );
    gsap.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1, delay: 2.7 });
    gsap.fromTo(
      '.big_text',
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 3, stagger: 0.25 }
    );
  }, []);

  return (
    <div className='bg'>
      <div className='nav-container'>
        <header>
          <a href='/' className='logo big_text'>
            <img src={require('../images/enactusLogo.png')} alt='' />
          </a>

          <nav>
            <ul>
              <li>
                <a href='/'>Projects</a>
              </li>
              <li>
                <a href='/'>Council</a>
              </li>
              <li>
                <a href='/'>Achievments</a>
              </li>
            </ul>
          </nav>
        </header>

        <div className='social-header big_text'>
          <ul>
            <li>
              <img src={require('../images/mail.png')} alt='email-id' />
            </li>
            <li>
              <a href='/'>
                <img
                  src={require('../images/Instagram-logo.png')}
                  alt='Instagram-logo'
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src={require('../images/linkedin-logo.png')} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='hero'>
        <div className='content'>
          <h1 className='big_text'>
            <span className='yellow'>EN</span>trepreneurial <br></br>
            <span className='yellow'>ACT</span>ion for others <br></br>creates a
            better world for <br></br>
            <span className='yellow'>US</span> all
          </h1>
        </div>
        <div className='hero-design'>
          <img src={big_logo} alt='' />
        </div>
      </div>
      <div className='intro'>
        <div className='intro-text'>
          <h1 className='hide'>
            <span className='text'>Enactus</span>
          </h1>
          <h3 className='hide'>
            <span className='text'>Delhi Technological University</span>
          </h3>
        </div>
      </div>
      <div className='slider'></div>
    </div>
  );
};

export default Home;
