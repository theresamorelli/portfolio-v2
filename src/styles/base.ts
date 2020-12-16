import { createGlobalStyle, css } from 'styled-components';

import { resetStyles } from './reset';
import { responsiveFont } from './utils';
import { variables } from './variables';

// stylelint-disable selector-type-no-unknown
export const Styles = createGlobalStyle`
  ${resetStyles}

  :root {
    --scale-element: 1;
    --scale-font: 1;

    ${variables.verticalBreakpoints.map(
      ({ height, scale }) => css`
        @media (max-height: ${height}) {
          --scale-element: ${scale};
          --scale-font: ${scale};
        }
      `,
    )}
  }

  html,
  body {
    min-height: 100vh;

    /* background-color: ${variables.colors.background}; */
  }

  html {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    /* always show the vertical scrollbar so that content doesn't jump */
    overflow-y: scroll;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  html.wf-loading * {
     opacity: 0;
 }

 html.noscroll {
   position: fixed;
   overflow-y: scroll;
   width: 100%;
 }

  /* inherited from <html> */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    ${responsiveFont()}

    position: relative;

    margin: 0;

    font-family: ${variables.fonts.primary};
    line-height: ${variables.fonts.lineHeight};

    /* iOS on orientation change */
    text-size-adjust: 100%;

    color: ${variables.colors.font};
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* placeholders */
  input,
  textarea,
  select {
    &::placeholder {
      opacity: 1;
      color: ${variables.colors.placeholder};
    }
  }

  a {
    padding: 0 7px;
    color: #333;
    text-decoration:none;
    /* text-decoration-color: #FF3722; */
    transition: color 0.4s;
    transition: background 0.4s;
  }

  a:hover {
    background: ${variables.colors.accent};
    color: #fff;
    /* text-decoration: none; */
  }


.p5Canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.fade-in {
animation: fadeIn ease 10s;
-webkit-animation: fadeIn ease 10s;
-moz-animation: fadeIn ease 10s;
-o-animation: fadeIn ease 10s;
-ms-animation: fadeIn ease 10s;
}

@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.nav-left {
  display: flex;
  align-items: center;
  font-size: 1.3em;
  color: #000;
  font-family: var(--accent-font);
  font-weight: 600;
}

.nav-right {
  display: flex;
  justify-content: flex-end;
  margin-left: 50px;
  font-family: var(--accent-font);
  color: #fff;
  transition: 1s;
}

.navbar-dark .navbar-nav.nav-info-links .nav-link {
  color: #d8d8d8;
}

.nav-info-links {
  display: flex;
  justify-content: space-evenly;
  flex-grow: 5;
  font-size: 17px;
  font-weight: 400;
}
`;
