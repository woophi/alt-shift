import { vars } from '@/ui/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';

const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    variant: {
      bullets: {
        gap: '16px',
      },
      flattened: {
        flexDirection: 'column',
        gap: '8px',
        marginTop: '16px',
      },
    },
  },
});
const points = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
  variants: {
    variant: {
      bullets: {
        gap: '4px',
      },
      flattened: {
        gap: '8px',
      },
    },
  },
});
const point = recipe({
  base: {
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
    variant: {
      bullets: {
        width: '8px',
      },
      flattened: {
        width: '32px',
      },
    },
  },
  defaultVariants: {
    filled: false,
  },
});

export const pointsStyles = {
  point,
  points,
  container,
};
