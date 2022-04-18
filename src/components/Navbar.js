import React, { useState } from 'react';

import styled from 'styled-components';
import Dropdown from './Dropdown';

const Navbar = ({ img, light, logo, color }) => {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };
  return (
    <>
      <Nav light={light}>
        <NavbarContainer>
          <NavLogo>
            <img src={img} alt='' />
          </NavLogo>

          <NavMenu>
            <NavItems>
              <NavLinks color={color}>Enactus India</NavLinks>
              <NavLinks color={color}>Achievments</NavLinks>
              <NavLinks
                color={color}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ position: 'relative' }}
              >
                Projects
                {dropdown && (
                  <Dropdown
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  />
                )}
              </NavLinks>
              <NavLinks color={color}>Council</NavLinks>
            </NavItems>
          </NavMenu>
          <NavProjectLogo>
            <img src={logo} alt='' />
          </NavProjectLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

export const Nav = styled.nav`
  background: transparent;
  color: ${(props) => (props.light ? '#fff' : '#000')};
  height: 12vh;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 1.1rem;
  padding-top: 10px;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  z-index: 1;
  width: 100%;
  padding: 10px 30px;
  max-width: 100%;
`;

export const NavLogo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;

  img {
    width: 150px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.2em;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &:hover {
    color: ${({ color }) => color && color};
    padding: 1em 1.2em;
    border-bottom: 2px solid ${({ color }) => color && color};
  }
`;

export const NavProjectLogo = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  transition: all 0.2s ease-in-out;

  img {
    width: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
