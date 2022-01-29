import React from 'react';
import Useful from './Useful';
import Logo from './Logo';
import Download from './Download';
import Social from './Social';
import img1 from './images/social.png';
// import Services from './Services';
function Foot() {
  return (
    <div style={{ marginTop: '10rem' }}>
      <footer id='footer' data-aos='fade-in'>
        <div className='footer-top'>
          <div className='container-fluid px-5'>
            <div className='row'>
              {/* <Logo />
              <Useful />

              <Services /> */}

              <div
                className='col-lg-3 col-md-6 footer-links-social'
                style={{ marginLeft: '2rem' }}
              >
                <img
                  className='img img-fluid'
                  src={img1}
                  alt='Card image cap'
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Foot;
