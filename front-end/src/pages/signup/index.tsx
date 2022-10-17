import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';

import logoImg from '../../../public/logo-vertical.svg';

import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Pizza du&apos;Mario - Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.contrainerCenter}>
        <Image src={logoImg} alt="Logotipo pizzaria du'Mario" />
        
        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form>
            <Input
              type="text"
              placeholder="Digite seu nome"
            />

            <Input
              type="email"
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
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <a className={styles.text}>Já possui uma conta? Faça seu login!</a>
          </Link>
        </div>
      </div>
    </>
  )
}