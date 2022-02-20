import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown({ onMouseEnter, onMouseLeave }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={click ? 'dropdown-menuu clicked' : 'dropdown-menuu'}
      >
        <span className='arrow'></span>
        <li className='dropdown-link'>Swajal</li>
        <li className='dropdown-link'>Unnati</li>
        <li className='dropdown-link'>Milan</li>
        <li className='dropdown-link'>Aarosh</li>
      </ul>
    </>
  );
}

export default Dropdown;
