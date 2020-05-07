import { math } from 'polished';
import './fonts.css';
export const variables = {
  // misc
  gutter: '50px',
  segmentPadding: '200px',

  // grid
  gridColumnCount: 12,
  baseline: '16px',

  // page dimensions
  pageWidth: '1290px',
  pageLimit: () => math(`${variables.pageWidth} + ${variables.breakpoints.lg.gutter} * 2px`),

  // fonts
  font: {
    family: '"Quattrocento Sans", sans-serif;',
    familyHeading: '"Quattrocento", serif',
    size: '17px',
    sizeMin: '14px',
    lineHeight: 1.5,
  },

  // colors
  colors: {
    primary: '#F5BB00',
    font: '#333',
    background: '#F2FFFD',
    placeholder: '#ddd',
  },

  // breakpoints
  breakpoints: {
    sm: { width: '420px', gutter: '30px' }, //  mobile
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
