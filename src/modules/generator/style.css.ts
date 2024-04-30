import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';
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

const copyContainer = style({
  color: vars.colors.mouseGray,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  marginTop: '16px',
  marginLeft: 'auto',
});

export const generatorStyles = {
  container,
  form,
  head,
  grid2c,
  text,
  copyContainer,
};
