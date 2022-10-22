import { FormEvent, useState } from 'react';
import Head from "next/head";
import Router from 'next/router';
import styles from './styles.module.scss';
import { toast } from 'react-toastify';

import { Header } from "../../components/ui/Header";
import { Input } from "../../components/ui/TextField";
import { Button } from "../../components/ui/Button";
import { PageTitle } from '../../components/ui/PageTitle';
import { setupAPIClient } from '../../services/api';

import { canSSRAuth } from "../../utils/canSSRAuth";

export default function Category() {
  const [ name, setName ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function registerCategory(event: FormEvent) {
    event.preventDefault();

    if (name === '') {
      toast.error('Preencha o nome da categoria!');
      return;
    }

    const apiClient = setupAPIClient();
    await apiClient.post('/category', {
      name: name
    })
    .catch(() => {
      toast.success('Erro ao cadastrar categoria!');
    });

    toast.success('Categoria cadastrada com sucesso!');
    setName('');
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Pizzaria du&apos;Mario</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <PageTitle>Cadastrar categorias</PageTitle>

          <form onSubmit={registerCategory}>
            <Input
              type="text"
              placeholder="Digite o nome da categoria"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className={styles.containerButton}>
              <Button
                type="button"
                backgroundColor="red-900"
                color="white"
                disabled={isLoading}
                onClick={() => Router.push('/product')}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                loading={isLoading}
                backgroundColor="green-900"
                color="black"
                disabled={(name === '' || isLoading) ? true : false}
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  return {
    props: {}
  }
})