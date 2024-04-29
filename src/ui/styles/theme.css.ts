import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    dustyBlue: '#667085',
    darkNavy: '#101828',
    doveGray: '#D0D5DD',
    white: '#FFFFFF',
    slateBlue: '#344054',
    athensGray: '#EAECF0',
  },
  sizes: {
    mw: '1120px',
  },
});
