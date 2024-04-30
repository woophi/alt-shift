import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    dustyBlue: '#667085',
    darkNavy: '#101828',
    doveGray: '#D0D5DD',
    white: '#FFFFFF',
    slateBlue: '#344054',
    athensGray: '#EAECF0',
    teal: '#087443',
    tealDark: '#066138',
    hoverWhite: 'rgba(215, 217, 223, .3)',
    dustyLavenderBlue: '#98A2B3',
    whisperWhite: '#EDFCF2',
  },
  sizes: {
    mw: '1120px',
  },
});
