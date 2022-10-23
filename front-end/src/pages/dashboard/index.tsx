import { useEffect, useState } from 'react';
import Head from "next/head";
import styles from './styles.module.scss';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { canSSRAuth } from "../../utils/canSSRAuth";
import { setupAPIClient } from "../../services/api";

import { Header } from '../../components/Header';
import { PageTitle } from "../../components/ui/PageTitle";
import { FiRefreshCcw } from "react-icons/fi";
import { ModalOrderDetail } from '../../components/Modal/OrderDetail';

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

export type OrderItemProps = {
  id: string;
  amount: number;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  }
  order: OrderProps;
}

export default function Dashboard({ orderList }: DashboardProps) {
  const [ orders, setOrders ] = useState<OrderProps[]>(orderList || []);
  const [ modalItem, setModalItem ] = useState<OrderItemProps[]>([]);
  const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  
  useEffect(() => {
    setInterval(() => {
      handleRefreshOrders();
    }, 60000);
  }, []);

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupAPIClient();

    const order = await apiClient.get('/order/detail', {
      params: {
        order_id: id
      }
    });

    setModalItem(order.data);
    setModalIsOpen(true);
  }

  async function handleRefreshOrders() {
    const apiClient = setupAPIClient();
    const orders = await apiClient.get('/orders');

    setOrders(orders.data);
    toast.success('Pedidos atualizados com sucesso!');
  }

  async function handleFinishOrder(id: string) {
    const apiClient = setupAPIClient();

    setIsLoading(true);

    await apiClient.put('/order/finish', {
      order_id: id
    })
    .catch(() => {
      toast.error('Erro ao cadastrar produto!');
    });

    handleRefreshOrders();

    toast.success('Mesa encerrada com sucesso!');

    setIsLoading(false);
    setModalIsOpen(false);
  }

  Modal.setAppElement('#__next');

  return (
    <>
      <Head>
        <title>Painel - Pizzaria du&apos;Mario</title>
      </Head>
      <div>
        <Header page="dashboard" />

        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <PageTitle>Pedidos</PageTitle>
            <button onClick={handleRefreshOrders}>
              <FiRefreshCcw size={24} color="#45FFB1" />
            </button>
          </div>

          {orders.length === 0 &&
            <p className={styles.emptyList}>
              Nenhum pedido aberto foi encontrato...
            </p>
          }

          {orders.length !== 0 &&
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
          }         
        </main>
        {modalIsOpen && (
          <ModalOrderDetail
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            order={modalItem}
            handleFinishOrder={handleFinishOrder}
            isLoading={isLoading}
          />
        )}
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