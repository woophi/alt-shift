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
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '16px',
            lineHeight: '24px',
          },
        },
      },
      body: {
        fontSize: '16px',
        lineHeight: '24px',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '14px',
          },
        },
      },
      h1: {
        fontSize: '48px',
        lineHeight: '60px',
        letterSpacing: '-0.02em',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '36px',
            lineHeight: '44px',
          },
        },
      },
      h2: {
        fontSize: '36px',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
        '@media': {
          'screen and (max-width: 768px)': {
            fontSize: '24px',
            lineHeight: '32px',
          },
        },
      },
      hint: {
        fontSize: '14px',
        lineHeight: '20px',
        color: vars.colors.mouseGray,
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
    error: {
      true: {
        color: vars.colors.vermilion,
      },
    },
    overflow: {
      ellipsis4lines: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
      },
    },
  },
  defaultVariants: {
    weight: 400,
    font: 'display',
  },
});
