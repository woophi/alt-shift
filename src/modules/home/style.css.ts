import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

const headContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px',
  borderBottom: `1px solid ${vars.colors.athensGray}`,
});

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

export const homeStyles = {
  headContainer,
  contentContainer,
  contentInner,
};
