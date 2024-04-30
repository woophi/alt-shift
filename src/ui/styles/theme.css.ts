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
    downy: '#73E2A3',
    mouseGray: '#475467',
    lightCoral: '#FDA29B',
    mintGreen: '#D3F8DF',
    mintGreen2: '#D1FADF',
    lightPeach: '#FEE4E2',
    vermilion: '#F04438',
    lightSilverGray: '#F2F4F7',
  },
  sizes: {
    mw: '1120px',
  },
});
