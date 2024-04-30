import { IconButton } from '@/ui/icon-button';
import Image from 'next/image';
import { Ponits } from '../points';
import { headerStyles } from './style.css';

export const Header = () => {
  return (
    <header className={headerStyles.container}>
      <Image src="/imgs/logo.svg" width={179} height={44} alt="Alt+Shift logo" />
      <div className={headerStyles.rightItems}>
        <Ponits variant="bullets" />
        <IconButton icon="home" />
      </div>
    </header>
  );
};
