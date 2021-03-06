import { math } from 'polished';

export const variables = {
  // misc
  gutter: '30px',
  segmentPadding: '200px',

  // grid
  gridColumnCount: 12,
  baseline: '16px',

  // page dimensions
  pageWidth: '1290px',
  pageLimit: () =>
    math(`${variables.pageWidth} + ${variables.breakpoints.lg.gutter} * 2px`),

  // fonts
  fonts: {
    heading: '"Playfair Display", sans-serif',
    primary: '"Open Sans", sans-serif',
    size: '16px',
    sizeMin: '13px',
    lineHeight: 1.5,
  },

  // colors
  colors: {
    primary: '#333',
    accent: '#7b52a1',
    title: '#000',
    background: '#fff',
    placeholder: '#ddd',
  },

  // breakpoints
  breakpoints: {
    sm: { width: '200px', gutter: '30px' }, //  mobile
    md: { width: '720px', gutter: '50px' }, //  tablet
    lg: { width: '1080px', gutter: '70px' }, // desktop
  } as {
    [key: string]: { width: string; gutter: string };
  },

  // vertical breakpoints
  verticalBreakpoints: [
    { height: '920px', scale: 0.975 },
    { height: '800px', scale: 0.95 },
    { height: '690px', scale: 0.925 },
  ],

  fontAwesome: {
    github: 'fab fa-github',
    linkedin: 'fab fa-linkedin-in',
    blog: 'fa fa-pencil',
  },
};

export const breakpoints = Object.entries(variables.breakpoints).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value.width,
  }),
  {},
) as {
  [K in keyof typeof variables['breakpoints']]: string;
};
