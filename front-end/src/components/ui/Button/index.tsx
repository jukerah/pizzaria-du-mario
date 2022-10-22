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
      {...rest}
      style={{
        backgroundColor: `var(--${backgroundColor})`,
        color: `var(--${color})`,
      }}
    >
      {loading ? (
        <FaSpinner color="#FFFFFF" size={24} />
      ) : (
        <a
          className={styles.buttonText}
          style={{ color: `var(--${color})` }}
        >
          {children}
        </a>
      )}
    </button>
  );
}