import { useContext } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

import { FiLogOut } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

interface HeaderProps {
  page?: string;
}

export function Header({ page }: HeaderProps) {
  const { user, signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={'/'}>
          <a>
            <img width="362" height="56" src="/logo-horizontal.svg" alt="Logotipo Pizzaria du'Mario" />
          </a>
        </Link>

        <nav
          className={styles.menuNav}
        >
          <ul>
            <li>
              <Link href={'/'}>
                <a
                  // style={{
                  //   color: page === 'dashboard' && 'var(--yellow-900)',
                  //   textDecoration: page === 'dashboard' && 'underline'
                  // }}
                >
                  Pedidos
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/product'}>
                <a
                  // style={{
                  //   color: page === 'product' && 'var(--yellow-900)',
                  //   textDecoration: page === 'product' && 'underline'
                  // }}
                >
                  Novo Produto
                </a>
              </Link>
            </li>
            <li>
              <p><span>Usuário: </span>{user?.name}</p>
              <button onClick={signOut}>
                <FiLogOut
                  color="#FFFFFF"
                  size={24}
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}