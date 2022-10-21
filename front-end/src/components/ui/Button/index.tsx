import { ReactNode, ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

import { FaSpinner } from 'react-icons/fa';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  backgroundColor: string;
  color: string;
}

export function Button({ loading, children, backgroundColor, color,  ...rest }: ButtonProps) {
  return (
    <button
      className={styles.button}
      disabled={loading}
      {...rest}
      style={{ backgroundColor: `var(--${backgroundColor})` }}
    >
      {loading ? (
        <FaSpinner color="#000000" size={24} />
      ) : (
        <a
          className={styles.buttonText}
          style={{ color: `var(--${color})` }}
        >{children}</a>
      )}
    </button>
  );
}