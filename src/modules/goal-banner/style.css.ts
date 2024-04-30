import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

const contentContainer = style({
  padding: '54px 64px',
  borderRadius: '12px',
  backgroundColor: vars.colors.whisperWhite,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '48px',
});
const contentInner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '16px',
  maxWidth: '480px',
});

export const bannerStyles = {
  contentContainer,
  contentInner,
};
