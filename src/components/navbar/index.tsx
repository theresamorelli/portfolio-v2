import React, { useEffect, useState } from 'react';
// import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import useWindowDimensions from 'hooks/use-window-dimensions';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #333;

  position: fixed !important;
  text-align: center;
  padding: 15px 35px;
  width: 100%;
  max-width: 1200px;
  max-height: 80px;
  top: 0;
  transition: top 0.5s, max-height 0.5s;
  overflow: hidden;
  z-index: 10;
  background: #fff;

  @media (max-width: 700px) {
    justify-content: center;
    padding: 15px 20px;
  }
`;

const NameContainer = styled.div`
  font-family: ${variables.fonts.heading};
  font-size: ${responsiveFont(40, 50)};
  color: ${variables.colors.title};
  font-weight: inherit;

  &:hover {
    color: white;
  }
`;

const NavItem = styled.div`
  font-size: ${responsiveFont(18, 24)};
  padding: 0 5px;
`;
function Navbar() {
  // accounts for window and document not existing during the build
  const isWindow = typeof window != 'undefined';
  const isDocument = typeof document != 'undefined';
  const { width } = useWindowDimensions();

  const navInfoLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const [prevScrollPos, updateScrollPos] = useState(
    isWindow && window.pageYOffset,
  );
  const [navbarMaxHeight, setNavbarMaxHeight] = useState('80px');
  const [navbarTop, setNavbarTop] = useState('0');

  function checkForShowingNavbarOnScroll() {
    const currScrollPos = isWindow && window.pageYOffset;
    const isScrollingUp = prevScrollPos > currScrollPos;
    const isAtTop = currScrollPos === 0;
    const maxScroll =
      isWindow && isDocument && document.body.clientHeight - window.innerHeight;
    const isAtBottom = currScrollPos === maxScroll;
    updateScrollPos(currScrollPos);
    return (isScrollingUp || isAtTop) && !isAtBottom;
  }

  const showDropdown = () => {
    setNavbarMaxHeight('450px');
  };
  const hideDropdown = () => {
    setNavbarMaxHeight('80px');
  };

  const handleDropdownClick = () => {
    if (navbarMaxHeight === '450px') hideDropdown();
    if (navbarMaxHeight === '80px') showDropdown();
  };

  const showNavbar = () => {
    setNavbarTop('0');
  };

  const hideNavbar = () => {
    hideDropdown();
    setNavbarTop('-80px');
  };

  const handleHomeClick = () => {
    showNavbar();
    hideDropdown();
  };

  const handleLinkClick = () => {
    hideNavbar();
  };

  const handleScroll = () => {
    const shouldShowNavbar = checkForShowingNavbarOnScroll();
    let isNavbarVisible = navbarTop === '0' || navbarTop === '0px';
    if (shouldShowNavbar && !isNavbarVisible) showNavbar();
    if (!shouldShowNavbar && isNavbarVisible) hideNavbar();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <NavBarWrapper>
      <NavBar
        id="collapsible-navbar"
        className="navbar navbar-expand-lg"
        style={{ top: navbarTop, maxHeight: navbarMaxHeight }}
      >
        <div className="nav-left">
          <AnchorLink
            className="navbar-brand"
            href="#home"
            onClick={handleHomeClick}
          >
            <NameContainer className="fade-in">Theresa Morelli</NameContainer>
          </AnchorLink>
        </div>
        {width > 700 && (
          <div className="nav-right navbar-collapse collapsible-navbar fade-in">
            <ul className="nav-info-links navbar-nav">
              {navInfoLinks.map((link, i) => (
                <NavItem className="nav-item" key={`info-link-${i}`}>
                  <AnchorLink
                    className="nav-link nav-item"
                    href={link.href}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </AnchorLink>
                </NavItem>
              ))}
            </ul> 
          </div>
        )}
      </NavBar>
    </NavBarWrapper>
  );
}

export default Navbar;
