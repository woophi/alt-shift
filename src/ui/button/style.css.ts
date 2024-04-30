import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme.css';

const button = recipe({
  base: {
    color: vars.colors.white,
    padding: '10px 18px',
    outline: 'none',
    border: `1px solid ${vars.colors.teal}`,
    display: 'flex',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    fontFamily: 'var(--fixel-text)',
    flexShrink: 0,
    borderRadius: '6px',
    justifyContent: 'center',
    fontWeight: 600,
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: vars.colors.doveGray,
        border: `1px solid ${vars.colors.doveGray}`,
        color: vars.colors.dustyLavenderBlue,
      },
    },
  },
  variants: {
    size: {
      m: {
        height: '44px',
        minWidth: '151px',
        gap: '8px',
        fontSize: '16px',
        lineHeight: '24px',
      },
      l: {
        height: '60px',
        minWidth: '190px',
        gap: '12px',
        padding: '16px 28px',
        fontSize: '18px',
        lineHeight: '28px',
      },
    },
    variant: {
      primary: {
        backgroundColor: vars.colors.teal,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.tealDark,
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.teal,
            transform: 'translateY(2px)',
          },
        },
      },
      secondary: {
        backgroundColor: vars.colors.white,
        border: `1px solid ${vars.colors.doveGray}`,
        selectors: {
          '&:hover:not(:disabled)': {
            backgroundColor: vars.colors.hoverWhite,
          },
          '&:active:not(:disabled)': {
            backgroundColor: vars.colors.white,
            transform: 'translateY(2px)',
          },
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {
        width: 'auto',
      },
    },
  },
  defaultVariants: {
    size: 'm',
    variant: 'primary',
    fullWidth: false,
  },
});

export const btnStyles = {
  button,
};
