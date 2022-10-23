import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import styles from './style.module.scss';
import { toast } from 'react-toastify';

import { PageTitle } from '../../ui/PageTitle';
import { Input } from '../../ui/TextField';
import { Button } from '../../ui/Button';

import { setupAPIClient } from '../../../services/api';

interface RegisterCategoryProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalRegisterCategory({ isOpen, onRequestClose }: RegisterCategoryProps) {
  const [ name, setName ] = useState<string>('');
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  async function registerCategory(event: FormEvent) {
    event.preventDefault();

    if (name === '') {
      toast.error('Preencha o nome da categoria!');
      return;
    }

    const apiClient = setupAPIClient();

    setIsLoading(true);

    await apiClient.post('/category', {
      name: name
    })
    .catch(() => {
      toast.success('Erro ao cadastrar categoria!');
    });

    setIsLoading(false);
    onRequestClose();

    toast.success('Categoria cadastrada com sucesso!');
    setName('');
  }
  
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    },
    content: {
      width: '100%',
      maxWidth: '500px',
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
      <main className={styles.container}>
        <PageTitle>Cadastrar categoria</PageTitle>

        <form
          onSubmit={registerCategory}
          className={styles.form}
        >
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
              onClick={onRequestClose}
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
    </Modal>
  );
}