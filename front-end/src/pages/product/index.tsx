import { FormEvent, useState, ChangeEvent } from 'react';
import Router from 'next/router';
import Head from "next/head";
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

import { Header } from "../../components/Header";
import { PageTitle } from "../../components/ui/PageTitle";

import { canSSRAuth } from "../../utils/canSSRAuth";
import { Input, Select, TextArea } from "../../components/ui/TextField";
import { Button } from "../../components/ui/Button";

import { setupAPIClient } from '../../services/api';
import { ModalRegisterCategory } from '../../components/Modal/RegisterCategory';

type CategoryProps = {
  id: string;
  name: string
}

interface ProductProps {
  categoryList: CategoryProps[];
}

export default function Product({ categoryList }: ProductProps) {
  const [ categories, setCategories ] = useState<CategoryProps[]>(categoryList || []);
  const [ categorySelected, setCategorySelected ] = useState<number>(0);
  const [ modalIsOpen, setModalIsOpen ] = useState<boolean>(false);

  const [ filePreview, setFilePreview ] = useState<string>('');
  const [ file, setFile ] = useState<File>(null);
  const [ categoryId, setCategoryId ] = useState<string>(categoryList[0].id);
  const [ product, setProduct ] = useState<string>('');
  const [ price, setPrice] = useState<number>(0);
  const [ description, setDescription] = useState<string>('');

  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  function handleCloseModal() {
    setModalIsOpen(false);
    refreshCategoryList();
  }

  function handleOpenModalView() {
    setModalIsOpen(true);
  }

  async function refreshCategoryList() {
    const apiClient = setupAPIClient();

    const categoryList = await apiClient.get('/category');

    setCategories(categoryList.data);
  }
  
  async function registerProduct(event: FormEvent) {
    event.preventDefault();

    try {
      const data = new FormData();
      if (!validateForm()) {
        toast.error('Por favor, preencha os campos obrigatórios!');
        return;
      }

      data.append('name', product);
      data.append('price', price.toString());
      data.append('description', description);
      data.append('category_id', categories[categorySelected].id);
      data.append('file', file);

      setIsLoading(true);

      const apiClient = setupAPIClient();

      await apiClient.post ('product', data);

      toast.success('Produto cadastrado sucesso!');
      clearForm();
      setIsLoading(false);
    } catch (error) {
      toast.error('Erro ao cadastrar produto!');
    }
  }

  function clearForm() {
    setFilePreview('');
    setFile(null);
    setCategorySelected(0);
    setCategoryId(categoryList[0].id);
    setProduct('');
    setPrice(0);
    setDescription('');
  }

  function  validateForm() {
    if (file === null || categoryId === '' || product === '' || isNaN(price)) return false;
    return true;
  }

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    
    const image = e.target.files[0];

    if (!image) return;

    if (image.type === 'image/jpg' || image.type === 'image/jpeg' || image.type === 'image/png') {
      setFile(image);
      setFilePreview(URL.createObjectURL(e.target.files[0]));
      console.log(file);
    }
  }

  Modal.setAppElement('#__next');

  return (
    <>
      <Head>
        <title>Novo produto - Pizzaria du&apos;Mario</title>
      </Head>
      <div>
        <Header page="product" />

        <main className={styles.container}>
          <PageTitle>Novo produto</PageTitle>

          <form
            onSubmit={registerProduct}
            className={styles.form}
          >
            <Input 
              type="file"
              text="Selecione a imagem do produto*"
              accept=".jpg,.jpge,.png"
              filePreview={filePreview}
              onChange={handleFile}
            />

            <div className={styles.containerCategory}>
              <Button
                type="button"
                loading={false}
                backgroundColor="green-900"
                color="black"
                onClick={() => handleOpenModalView()}
              >
                Nova Categoria
              </Button>
              <Select
                value={categorySelected}
                onChange={(e) => setCategorySelected(parseInt(e.target.value))}
              >
                {categories.map((category, index) => {
                  return (
                    <option key={category.id} value={index}>
                      {category.name}
                    </option>
                  )
                })}
              </Select>
            </div>

            <div className={styles.containerProductAndPrice}>
              <Input
                type="text"
                placeholder="Digite o nome do produto*"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <Input
                type="number"
                placeholder="Digite o valor do produto*"
                value={price}
                step="0.01"
                min={0}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </div>

            <TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Digite a descrição do produto..."
            />
            
            <div className={styles.containerButton}>
              <Button
                type="button"
                backgroundColor="red-900"
                color="white"
                disabled={isLoading}
                onClick={() => Router.push('/')}
              >
                Cancelar
              </Button>

              <Button
                type="submit"
                loading={isLoading}
                backgroundColor="green-900"
                color="black"
                disabled={(validateForm() || isLoading) ? false : true}
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </main>
        {modalIsOpen && (
          <ModalRegisterCategory
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const categoryList = await apiClient.get('/category');

  return {
    props: {
      categoryList: categoryList.data
    }
  }
})