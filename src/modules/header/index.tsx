import { IconButton } from '@/ui/icon-button';
import { typography } from '@/ui/styles/typography.css';
import Image from 'next/image';
import { headerStyles } from './style.css';

export const Header = () => {
  return (
    <header className={headerStyles.container}>
      <Image src="/imgs/logo.svg" width={179} height={44} alt="Alt+Shift logo" />
      <div className={headerStyles.rightItems}>
        <p className={typography({ variant: 'caption', weight: 400 })}>0/5 applications generated</p>
        <div className={headerStyles.points}>
          <span className={headerStyles.point()} />
          <span className={headerStyles.point()} />
          <span className={headerStyles.point()} />
          <span className={headerStyles.point()} />
          <span className={headerStyles.point()} />
        </div>
        <IconButton icon="home" />
      </div>
    </header>
  );
};
