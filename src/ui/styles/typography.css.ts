import { recipe } from '@vanilla-extract/recipes';
import { vars } from './theme.css';

export const typography = recipe({
  base: {
    margin: 0,
    padding: 0,
  },
  variants: {
    weight: {
      300: {
        fontWeight: 300,
      },
      400: {
        fontWeight: 400,
      },
      500: {
        fontWeight: 500,
      },
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
    },
    variant: {
      caption: {
        color: vars.colors.dustyBlue,
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
  },
  defaultVariants: {
    weight: 400,
  },
});
