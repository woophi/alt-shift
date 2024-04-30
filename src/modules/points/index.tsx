import { typography } from '@/ui/styles/typography.css';
import { pointsStyles } from './style.css';

type Props = {
  variant: 'bullets' | 'flattened';
};

export const Ponits = ({ variant }: Props) => {
  const isFlattened = variant === 'flattened';
  return (
    <div className={pointsStyles.container({ variant })}>
      {!isFlattened && <p className={typography({ variant: 'caption', font: 'text' })}>0/5 applications generated</p>}
      <div className={pointsStyles.points({ variant })}>
        <span className={pointsStyles.point({ variant })} />
        <span className={pointsStyles.point({ variant })} />
        <span className={pointsStyles.point({ variant })} />
        <span className={pointsStyles.point({ variant })} />
        <span className={pointsStyles.point({ variant })} />
      </div>
      {isFlattened && <p className={typography({ variant: 'caption', font: 'text' })}>0 out of 5</p>}
    </div>
  );
};
