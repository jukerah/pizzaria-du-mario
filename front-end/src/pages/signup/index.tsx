import { useState, FormEvent, useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/home.module.scss';
import { toast } from 'react-toastify';

import logoImg from '../../../public/logo-vertical.svg';

import { Input } from '../../components/ui/TextField';
import { Button } from '../../components/ui/Button';
import Link from 'next/link';

import { AuthContext } from '../../contexts/AuthContext';
import { canSSRGuest } from '../../utils/canSSRGuest';

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  async function handleSinUp(event: FormEvent) {
    event.preventDefault();

    if (name === '' || email === '' || password === '') {
      toast.error('Preencha os campos nome, email e senha!');
      return;
    }

    setIsLoading(true);

    const data = { name, email, password };

    await signUp(data);

    setIsLoading(false);
  }

  return (
    <>
      <Head>
        <title>Pizzaria du&apos;Mario - Faça seu cadastro agora!</title>
      </Head>
      <div className={styles.contrainerCenter}>
        <Image src={logoImg} alt="Logotipo pizzaria du'Mario" />
        
        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form onSubmit={handleSinUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Digite seu email"
              disabled={name === '' ? true : false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Digite sua senha"
              disabled={email === '' ? true : false}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={isLoading}
              backgroundColor="green-900"
              color="black"
              disabled={name === '' || email === '' || password === '' ? true : isLoading}
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


export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
});