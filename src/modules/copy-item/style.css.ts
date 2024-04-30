import { vars } from '@/ui/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const copyContainer = recipe({
  base: {
    color: vars.colors.mouseGray,
    display: 'flex',
    height: '24px',
    gap: '8px',
    cursor: 'pointer',
  },
  variants: {
    noValue: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.48,
      },
    },
  },
});

export const copyStyles = {
  copyContainer,
};
