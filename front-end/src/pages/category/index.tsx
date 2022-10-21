import { FormEvent, useContext, useState } from 'react';
import Head from "next/head";
import styles from './styles.module.scss';

import { Header } from "../../components/ui/Header";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { PageTitle } from '../../components/ui/PageTitle';

export default function Category() {
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <>
      <Head>
        <title>Nova categoria - Pizzaria du&apos;Mario</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <PageTitle>Cadastrar categorias</PageTitle>

          <form>
            <Input
              type="text"
              placeholder="Digite o nome da categoria"
            />
            <div className={styles.containerButton}>
              <Button
                type="button"
                loading={isLoading}
                backgroundColor="red-900"
                color="white"
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                loading={isLoading}
                backgroundColor="green-900"
                color="black"
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