import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface TitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: TitleProps) {
  return(
    <h1 className={styles.title}>{children}</h1>
  );
}