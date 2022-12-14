# Pizzaria du'Mario

<img src="images/preview.jpg"/>

<br>

Summary
=================
<!--ts-->
   * [Descrição do Projeto](#about)
   * [Deploy do Projeto](#demo-project)
   * [Features](#features)
   * [Pré-requisitos e instalação do projeto](#pre-req)
<!--te-->

<hr/>

<h2 id="about">Descrição do Projeto</h2>
<br />

> Este projeto é um sistema para gerenciamento de pedidos na Pizzaria du'Mario. O sistema é dividido em 2 partes um app para os garçons realizarem os pedidos no salão e a parte web para recepção realizar os pedidos delivery, com uma página de pedidos é possível que a cozinha e bar vejam individualmente seus respectivos pedidos a serem preparados.

<br />

### Funcionalidades:

#### App mobile:

* Página de login.
* Cadastro de pedidos do salão.
* Página para listar os pedidos.
   * Modal com detalhes do pedido.

#### Web:

* Cadastrar um novo usuario.
* Logar um usuário.
* Verificar autenticação para rotas privadas.
* Cadastrar categorias.
* Cadastrar produtos.
* Página de pedidos com lista de todos pedidos que não estão em rascunho.
* Concluir o pedido.

<br />

### Tecnologias e dependências utilizadas no projeto:

* <strong>Figma</strong>
* <strong>TypeScript</strong>
* <strong>Next.js</strong>
* <strong>sass</strong>
* <strong>axios</strong>
* <strong>nookies</strong>
* <strong>react-icons</strong>
* <strong>react-toastify</strong>
* <strong>react-modal</strong>
* <strong>Node.js</strong>
* <strong>PostgreSQL</strong>
* <strong>express</strong>
* <strong>prisma</strong>
* <strong>cors</strong>
* <strong>bcryptjs</strong>
* <strong>dotenv</strong>
* <strong>jsonwebtoken</strong>
* <strong>multer</strong>
* <strong>cors</strong>

<hr/>

<h2 id="demo-project">Deploy do Projeto</h2>

### Design da interface com Figma:
<a align="left" href="https://www.figma.com/file/RrVAW07DyAPxbpTr1KdyQd/Pizzaria-du'Mario?node-id=2%3A1664">https://www.figma.com/file/RrVAW07DyAPxbpTr1KdyQd/Pizzaria-du'Mario?node-id=2%3A1664</a>

### Deploy:
<a align="left" href="#" target="_blank">Em breve...</a>

<hr/>

<h2 id="features" align="center">Features</h2>

<br />

> O projeto ainda está em desenvolvimento e os próximos passos serão atualizados abaixo:

<br>

### Front-end Web:
Back-end:
- [ X ] Página de login.
- [ X ] Página de cadastro de usuário.
- [ X ] Verificar autenticação para rotas privadas.
- [ X ] Deslogar usuário.
- [ X ] Página de cadastro de produto.
  - [ X ] Modal para cadastro de categoria.
- [ X ] Página de pedidos.
  - [ X ] Modal para listar detalhes do pedido.
  - [ X ] Concluir o pedido.

<br>

### Front-end App:
> Em breve...

<br>

### Back-end:
- [ X ] Cadastrar um novo usuario.
- [ X ] Logar um usuário.
- [ X ] Verificar autenticação para rotas privadas.
- [ X ] Mostrar detalhes do usuario logado.
- [ X ] Criar e listar categorias.
- [ X ] Criar produtos e listar produtos de uma categoria específica.
- [ X ] Abrir uma mesa (order) e poder fechar ela.
- [ X ] Adicionar itens a uma mesa e também poder retirar os itens.
- [ X ] Enviar (order) retirar de rascunho.
- [ X ] Listar todos pedidos que não estão em rascunho (draft).
- [ X ] Poder acessar todos detalhes de uma mesa com pedidos dela.
- [ X ] Concluir o pedido.


<br>

### Database:

<br>

<img src="images/relational-database-model.jpg"/>


<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

### Web (Front-end):

#### Instalação:

#### pizzaria-du-mario\front-end>
`npm install`

<br>

#### Executando:

#### pizzaria-du-mario\front-end>
`yarn dev`

<br>


### App (Mobile):
> Em breve.


<br>

### Server (Back-end):
#### Instalação:

#### pizzaria-du-mario\back-end>
`npm install`

<br>

#### Executando:

#### pizzaria-du-mario\back-end>
`yarn dev`

<br>

### Database:

> Para o banco de dados será necessário a criação de um banco de dados PostgreSQL.

<br>

#### Configurando variavel de ambiente:

#### Arquivo: `pizzaria-du-mario/back-end/.env`

<br>

#### `DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"`

<br>

#### Criando a Migrate em desenvolvimento:

#### pizzaria-du-mario\back-end>
`yarn prisma migrate dev`

<br>

#### Criando a Migrate em produção:

#### pizzaria-du-mario\back-end>
`yarn prisma migrate deploy`

<hr/>

<h2 align="center">Author</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Developed by <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

