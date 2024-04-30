import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

const container = style({
  width: '100%',
  maxWidth: vars.sizes.mw,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const rightItems = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
});

export const headerStyles = {
  container,
  rightItems,
};
