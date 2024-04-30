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
      backgroundColor: vars.colors.white,
      transform: 'translateY(1px)',
    },
    '&:hover:not(:disabled)': {
      backgroundColor: vars.colors.hoverWhite,
    },
  },
});

export const iconBtnStyles = {
  btn,
};
