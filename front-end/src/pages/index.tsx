import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo-vertical.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza du&apos;Mario - Faça seu login</title>
      </Head>
      <div className={styles.contrainerCenter}>
        <Image src={logoImg} alt="Logotipo pizzaria du'Mario" />
        
        <div className={styles.login}>
          <form>
            <Input
              type="text"
              placeholder="Digite seu email"
            />

            <Input
              type="password"
              placeholder="Digite sua senha"
            />

            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}