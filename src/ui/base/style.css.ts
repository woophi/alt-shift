import { style } from '@vanilla-extract/css';
import { vars } from '../styles/theme.css';

const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  padding: '32px',
});
const main = style({
  width: '100%',
  maxWidth: vars.sizes.mw,
});

export const baseStyles = {
  container,
  main,
};
