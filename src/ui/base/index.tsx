import { baseStyles } from './style.css';

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export const BaseLayout = ({ header, children }: Props) => {
  return (
    <div className={baseStyles.container}>
      {header}
      <main className={baseStyles.main}>{children}</main>
    </div>
  );
};
