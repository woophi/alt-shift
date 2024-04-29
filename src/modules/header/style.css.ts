import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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
  gap: '16px',
});
const points = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});
const point = recipe({
  base: {
    width: '8px',
    height: '8px',
    borderRadius: '4px',
    backgroundColor: vars.colors.darkNavy,
  },
  variants: {
    filled: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0.24,
      },
    },
  },
  defaultVariants: {
    filled: false,
  },
});

export const headerStyles = {
  container,
  rightItems,
  points,
  point,
};
