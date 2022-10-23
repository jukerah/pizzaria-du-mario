import { useState } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss';

import { FiX } from 'react-icons/fi';

import { OrderItemProps } from '../../../pages/dashboard';
import { Button } from '../../ui/Button';

interface OrderDetailProps {
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[];
  handleFinishOrder: (id: string) => void;
  isLoading: boolean;
}

export function ModalOrderDetail({ isOpen, onRequestClose, order, handleFinishOrder, isLoading }: OrderDetailProps) {
  function totalOrderPrice() {
    let total: number = 0;

    for (let i = 0; i < order.length; i++) {
      total += parseFloat(order[i].product.price);
    }

    return total.toFixed(2);
  }
  
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    },
    content: {
      width: '100%',
      maxWidth: '680px',
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: '50%',
      padding: '32px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#000021',
      border: 'none',
      borderRadius: '6px'
    }
  }
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
    >
      <div className={styles.containerHeader}>
        <h2>Detalhes do pedido</h2>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: 'transparent', border: 'none' }}
          
        >
          <FiX size={45} color="#FF3F4B" />
        </button>
      </div>

      <div className={styles.container}>
        <h3><span>Mesa: </span>{order[0].order.table}</h3>

        <article className={styles.containerProductList}>
          {order.map(item => {
            return (
              <section key={item.product_id} className={styles.product}>
                <h4>{item.amount} - <span>{item.product.name}</span></h4>
                {(item.product.description !== null || item.product.description !== '') &&
                  <p>{item.product.description}</p>
                }
                <p className={styles.price}>
                  <span>R$ </span>{parseFloat(item.product.price).toFixed(2)}
                </p>
              </section>
            )
          })}
        </article>

        <p className={styles.total}>
          Total: <span>{totalOrderPrice()}</span>
        </p>

        <div className={styles.containerButton}>
          <Button
            loading={isLoading}
            backgroundColor="green-900"
            color="black"
            disabled={isLoading}
            onClick={() => handleFinishOrder(order[0].order_id)}
          >
            Concluir pedido
          </Button>
        </div>
        
      </div>
    </Modal>
  );
}