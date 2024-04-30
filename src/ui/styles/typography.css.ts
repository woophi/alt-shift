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
      h1: {
        fontSize: '48px',
        lineHeight: '60px',
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
      },
    },
    font: {
      text: {
        fontFamily: 'var(--fixel-text)',
      },
      display: {
        fontFamily: 'var(--fixel-display)',
      },
    },
  },
  defaultVariants: {
    weight: 400,
    font: 'display',
  },
});
