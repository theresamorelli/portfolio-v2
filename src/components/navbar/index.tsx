import React, { useEffect, useState, useRef } from 'react';
// import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { useWindowSize } from 'react-recipes';
import { useScroll } from 'hooks/use-scroll';
import { responsiveFont } from 'styles/utils';
import { variables } from 'styles/variables';

const Navbar: React.FC = () => {
  const { scrollDirection } = useScroll();
  const { width } = useWindowSize();
  const navInfoLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const justClickedLink = useRef(false);

  const checkForShowingNavbarOnScroll = () => {
    if (scrollDirection === 'up' && !isNavbarVisible) {
      setNavbarVisible(true);
    }
    if (
      (scrollDirection === 'down' && isNavbarVisible) ||
      justClickedLink.current === true
    ) {
      setNavbarVisible(false);
    }
  };

  const handleLinkClick = () => {
    // set ref temporarily to allow hiding navbar
    justClickedLink.current = true;
    // reset ref so navbar can be shown on scroll
    setTimeout(() => (justClickedLink.current = false), 1000);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', checkForShowingNavbarOnScroll);
      return () =>
        window.removeEventListener('scroll', checkForShowingNavbarOnScroll);
    }
  }, [scrollDirection]);

  return (
    <NavBarWrapper>
      <NavBar
        id="collapsible-navbar"
        className="navbar navbar-expand-lg"
        style={{
          top: isNavbarVisible ? '0px' : '-80px',
        }}
      >
        <div className="nav-left">
          <AnchorLink className="navbar-brand" href="#home">
            <MyName className="fade-in">Theresa Morelli</MyName>
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
};

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

const NavItem = styled.div`
  font-size: ${responsiveFont(18, 24)};
  padding: 0 5px;
`;

const MyName = styled.div`
  font-family: ${variables.fonts.heading};
  font-size: ${responsiveFont(28, 50)};
  color: ${variables.colors.title};
  font-weight: inherit;

  &:hover {
    color: white;
  }
`;

export default Navbar;
