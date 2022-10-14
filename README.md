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
* Cadastrar de pedidos do salão.
* Página para listar os pedidos.
   * Modal com detalhes do pedido.

#### Web:

* Página de login.
* Dashboard.
* Página para listar pedidos com filtro para cozinha, bar ou recepção. Cada filtro ve os pedidos de acordo com a categoria do filtro.
   * Modal com detalhes do pedido.
* Página de cadastro de pedido delivery com geração de cupom não fiscal.
* Página para editar os pedidos.
* Página listar o cardápio.
* Página de cadastro e edição de produtos.
* Página para listar as mesas abertas e seus pedidos para que seja feita a baixa da mesa e geração do cupom não fiscal.
* Página para cadastrar novos usuários.
* Página para gerenciar as permissões dos usuários.

<br />

### Tecnologias e dependências utilizadas no projeto:

* <strong>Figma</strong>
* <strong>HTML5</strong>
* <strong>TypeScript</strong>
* <strong>React.js</strong>
* <strong>axios</strong>
* <strong>styled-components</strong>
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
> Em breve...

<br>

### Front-end App:
> Em breve...

<br>

### Back-end:
> Em breve...

<br>

### Database:

<br>

<img src="images/relational-database-model.jpg"/>


<hr/>

<h2 id="pre-req">Pré-requisitos e instalação do projeto</h2>

### Web (Front-end):
> Em breve...

### App (Front-end):
> Em breve...

### Server (Back-end):
#### Instalação:

#### pizzaria-du-mario\backend>
`npm install`

<br>

#### Executando:

#### pizzaria-du-mario\backend>
`yarn dev`

<br>

### Database:

> Para o banco de dados será necessário a criação de um banco de dados PostgreSQL.

<br>

#### Configurando variavel de ambiente:

#### Arquivo: `pizzaria-du-mario/backend/.env`

<br>

#### `DATABASE_URL="postgresql://user:password@host:port/db_name?schema=public"`

<br>

#### Criando a Migrate em desenvolvimento:

#### pizzaria-du-mario\backend>
`yarn prisma migrate dev`

<br>

#### Criando a Migrate em produção:

#### pizzaria-du-mario\backend>
`yarn prisma migrate deploy`

<hr/>

<h2 align="center">Author</h2>

<a href="https://marioelvio.com" target="_blank">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81795443?v=4" width="100px;" alt=""/>
</a> <a href="https://marioelvio.com" title="Mario Elvio" target="_blank"></a>

<p>Developed by <a href="https://marioelvio.com">Mario Elvio</a>.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Mario_Elvio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marioelvio/)](https://www.linkedin.com/in/marioelvio/)

