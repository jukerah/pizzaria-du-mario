import { useState } from 'react';
import Head from "next/head";
import styles from './styles.module.scss';

import { canSSRAuth } from "../../utils/canSSRAuth";
import { setupAPIClient } from "../../services/api";

import { Header } from '../../components/ui/Header';
import { PageTitle } from "../../components/ui/PageTitle";
import { FiRefreshCcw } from "react-icons/fi";

type OrderProps = {
  id: string;
  table: string;
  status: boolean;
  draft: boolean;
  name: string | null;
}
interface DashboardProps {
  orderList: OrderProps[];
}

export default function Dashboard({ orderList }: DashboardProps) {
  const [ orders, setOrders ] = useState<OrderProps[]>(orderList || []);
  
  function handleOpenModalView(id: string) {
    console.log('id: ', id);
  }

  return (
    <>
      <Head>
        <title>Painel - Pizzaria du&apos;Mario</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <PageTitle>Pedidos</PageTitle>
            <button>
              <FiRefreshCcw size={24} color="#45FFB1" />
            </button>
          </div>

          <article className={styles.listOrders}>
            {orders.map(order => {
              return (
                <section key={order.id} className={styles.cardOrder}>
                  <h2><span>Mesa: </span>{order.table}</h2>
                  <button onClick={() => handleOpenModalView(order.id)}>
                    Ver detalhes
                  </button>
                </section>
              )
            })}
          </article>          
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const orderList = await apiClient.get('/orders');
  
  return {
    props: {
      orderList: orderList.data
    }
  }
})