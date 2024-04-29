import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

const btn = style({
  outline: 'none',
  border: `1px solid ${vars.colors.doveGray}`,
  backgroundColor: vars.colors.white,
  borderRadius: '6px',
  flexShrink: 0,
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: vars.colors.slateBlue,
  cursor: 'pointer',
  padding: '0',
  transition: 'all .2s ease-in-out',
  selectors: {
    '&:active:not(:disabled)': {
      transform: 'translateY(1px)',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: 'rgba(215, 217, 223, .3)',
    },
  },
});

export const iconBtnStyles = {
  btn,
};
