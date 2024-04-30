import { vars } from '@/ui/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const container = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '32px',
});

const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const text = style({
  borderRadius: '12px',
  padding: '24px',
  backgroundColor: vars.colors.lightSilverGray,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const head = recipe({
  base: {
    color: vars.colors.darkNavy,
    paddingBottom: '12px',
    borderBottom: `1px solid ${vars.colors.athensGray}`,
    textTransform: 'capitalize',
    maxWidth: '544px',
  },
  variants: {
    placeholder: {
      true: {
        color: vars.colors.dustyBlue,
      },
    },
  },
});

const grid2c = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
});

const bounceAnimation = keyframes({
  '0%': {
    transform: 'translateY(0)',
    opacity: 0.48,
  },
  '50%': {
    transform: 'translateY(-14px)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(0px)',
    opacity: 0.48,
  },
});
const ball = style({
  width: '80px',
  height: '80px',
  background: `radial-gradient(100% 100% at 0% 0%, ${vars.colors.white} 0%, ${vars.colors.doveGray} 100%)`,
  borderRadius: '50%',
  boxShadow: '0px -2px 32px 0px #10182814 inset',
  animation: `${bounceAnimation} 1.5s linear infinite`,
  margin: 'auto',
});

const copyItem = style({
  marginTop: '16px',
  marginLeft: 'auto',
});

const banner = style({
  marginTop: '16px !important',
  gridColumn: 'span 2',
});

export const generatorStyles = {
  container,
  form,
  head,
  grid2c,
  text,
  ball,
  copyItem,
  banner,
};
