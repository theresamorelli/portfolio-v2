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

    font-family: ${variables.font.family};
    line-height: ${variables.font.lineHeight};
    font-weight: ${variables.font.weight};

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
    color: black;
    text-decoration-color: #FF3722;

    transition: color 0.4s;
    transition: background 0.4s;
  }

  a:hover {
    background: #FF3722;
    color: white;
    text-decoration: none;
  }

canvas:after {
  content  : "";
  position : absolute;
  z-index  : 1;
  bottom   : 0;
  left     : 0;
  pointer-events   : none;
  background-image : linear-gradient(to bottom, 
                    rgba(255,255,255, 0), 
                    rgba(255,255,255, 1) 90%);
  width    : 100%;
  height   : 4em;
}

  .shadow {
    -webkit-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 5px 20px -2px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 10px 20px -2px rgba(0, 0, 0, 0.5);
  }

  .p5Canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .fade-in {
  animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;
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
`;
