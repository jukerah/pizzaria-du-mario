import { FormEvent, useContext, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/home.module.scss';
import { toast } from 'react-toastify';

import logoImg from '../../public/logo-vertical.svg';

import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

import { AuthContext } from '../contexts/AuthContext';

import { canSSRGuest } from '../utils/canSSRGuest';

export default function Home() {
  const { signIn } = useContext(AuthContext);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === '' || password === '') {
      toast.error('Por favor, preencha os campos email e senha!');
      return;
    }

    setIsLoading(true);

    const data = {
      email,
      password
    };

    await signIn(data);

    setIsLoading(false);
  }

  return (
    <>
      <Head>
        <title>Pizzaria du&apos;Mario - Faça seu login</title>
      </Head>
      <div className={styles.contrainerCenter}>
        <Image src={logoImg} alt="Logotipo pizzaria du'Mario" />
        
        <div className={styles.login}>
          <h1>Acessar sua conta</h1>

          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={isLoading}
              backgroundColor="green-900"
              color="black"
            >
              Entrar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se!</a>
          </Link>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});