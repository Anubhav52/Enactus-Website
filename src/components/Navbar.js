import React from 'react';
import './Home.css';
// import img from '../images/enactusLogo.png';
// import img from '../images/blackenactusLogo.png';
function Navbar({ img, light }) {
  const style = {
    position: 'relative',
    zIndex: '2',
  };

  return (
    <nav className='navbar navbar-expand-lg active col-md-12 p-2' style={style}>
      <div style={{ marginLeft: '10px' }}>
        <a href='/' className='logo navbar-brand text-white offset-md-2 ml-3'>
          <img src={img} style={{ width: '100px', height: '10vh' }}></img>
        </a>
      </div>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='nav mr-auto mx-auto '>
          <li className='nav-item dropdown'>
            <a
              className={`nav-link dropdown-toggle ${
                light ? 'text-light' : 'text-dark'
              }`}
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Enactus Worldwide
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item text-dark' href='#'>
                Inititatives
              </a>
              <a className='dropdown-item text-dark' href='#'>
                Plans
              </a>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a
              className={`nav-link dropdown-toggle ${
                light ? 'text-light' : 'text-dark'
              }`}
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Projects
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'>
                Project Aarosh
              </a>
              <a className='dropdown-item' href='#'>
                Project Milan
              </a>

              <a className='dropdown-item text-dark' href='#'>
                Project Swajal
              </a>
              <a className='dropdown-item' href='#'>
                Project Unnati
              </a>
            </div>
          </li>
          <li className='nav-item text-dark'>
            <a
              className={`nav-link dropdown-toggle ${
                light ? 'text-light' : 'text-dark'
              }`}
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Council
            </a>
          </li>
        </ul>
        <div className='p-2' style={{ background: 'transparent' }}></div>
      </div>
    </nav>
  );
}

export default Navbar;
