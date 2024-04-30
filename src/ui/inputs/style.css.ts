import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../styles/theme.css';

const label = style({
  fontFamily: 'var(--fixel-text)',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: vars.colors.slateBlue,
});

const input = style({
  cursor: 'text',
  outline: 'none',
  transition: 'all .2s ease-in-out',
  height: '40px',
  fontFamily: 'var(--fixel-text)',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: vars.colors.darkNavy,
  padding: '8px 12px',
  borderRadius: '6px',
  border: `1px solid ${vars.colors.doveGray}`,
  boxShadow: '0px 1px 2px 0px #1018280D',
  '::placeholder': {
    color: vars.colors.dustyBlue,
  },
  ':focus': {
    border: `1px solid ${vars.colors.downy}`,
    boxShadow: `0px 0px 0px 4px ${vars.colors.mintGreen}`,
  },
});

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

const textArea = recipe({
  base: [
    input,
    {
      padding: '12px 14px',
      minHeight: '236px',
      resize: 'none',
    },
  ],
  variants: {
    error: {
      true: {
        border: `1px solid ${vars.colors.lightCoral}`,
        boxShadow: `0px 0px 0px 4px ${vars.colors.lightPeach}`,
        ':focus': {
          border: `1px solid ${vars.colors.lightCoral}`,
          boxShadow: `0px 0px 0px 4px ${vars.colors.lightPeach}`,
        },
      },
    },
  },
});

export const inputsStyles = {
  label,
  input,
  container,
  textArea,
};
