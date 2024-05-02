import { vars } from '@/ui/styles/theme.css';
import { style } from '@vanilla-extract/css';

const headContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '16px',
  borderBottom: `1px solid ${vars.colors.athensGray}`,
  flexWrap: 'wrap',
  gap: '8px',
});

const applicationsContainer = style({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '16px',
  rowGap: '24px',
  marginTop: '24px',
  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      marginTop: '16px',
      rowGap: '16px',
    },
  },
});
const application = style({
  padding: '24px',
  borderRadius: '12px',
  backgroundColor: vars.colors.lightSilverGray,
  '@media': {
    'screen and (max-width: 768px)': {
      padding: '12px',
    },
  },
});

const applicationText = style({
  maskImage: `linear-gradient(0deg, rgba(242, 244, 247, 0) 0%, ${vars.colors.lightSilverGray} 30%)`,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 6,
  WebkitBoxOrient: 'vertical',
  display: '-webkit-box',
  wordBreak: 'break-all',
});
const applicationFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '16px',
});

const deleteContainer = style({
  color: vars.colors.mouseGray,
  display: 'flex',
  gap: '8px',
  cursor: 'pointer',
  height: '24px',
});

export const homeStyles = {
  headContainer,
  applicationsContainer,
  application,
  applicationText,
  applicationFooter,
  deleteContainer,
};
