import React from 'react';
import './Home.css';
import big_logo from '../images/big_logo.svg';

const Home = () => {
  return (
    <div className='bg'>
      <div className='nav-container'>
        <header>
          <a href='/' className='logo'>
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

        <div className='social-header'>
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
          <h1>
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
    </div>
  );
};

export default Home;
