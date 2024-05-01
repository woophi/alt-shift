import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

const container = style({
  width: '100%',
  maxWidth: vars.sizes.mw,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '16px',
    },
  },
});

const rightItems = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});
const logo = style({
  '@media': {
    'screen and (max-width: 768px)': {
      width: 141,
      height: 38,
    },
  },
});
const mobileItems = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'block',
    },
  },
});

export const headerStyles = {
  container,
  rightItems,
  mobileItems,
  logo,
};
