import { routes } from '@/core/routes';
import { IconButton } from '@/ui/icon-button';
import Image from 'next/image';
import Link from 'next/link';
import { Ponits } from '../points';
import { headerStyles } from './style.css';

export const Header = () => {
  return (
    <header className={headerStyles.container}>
      <Image src="/imgs/logo.svg" width={179} height={44} alt="Alt+Shift logo" />
      <div className={headerStyles.rightItems}>
        <Ponits variant="bullets" />
        <Link href={routes.home}>
          <IconButton icon="home" />
        </Link>
      </div>
    </header>
  );
};
