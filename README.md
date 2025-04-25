# API REST Node.js para Gerenciamento de Produtos

Este projeto é uma API REST desenvolvida em Node.js para gerenciar produtos. Ele utiliza o framework Express para lidar com as rotas e o Mongoose para interagir com o banco de dados MongoDB.

## Funcionalidades

- **Listar Produtos**: Obter todos os produtos cadastrados.
- **Obter Produto por ID**: Buscar um produto específico pelo seu ID.
- **Criar Produto**: Adicionar um novo produto ao banco de dados.
- **Atualizar Produto (PUT)**: Atualizar completamente os dados de um produto existente.
- **Atualizar Produto (PATCH)**: Atualizar parcialmente os dados de um produto existente.
- **Deletar Produto**: Remover um produto do banco de dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.
- **MongoDB**: Banco de dados NoSQL.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para desenvolvimento que reinicia automaticamente o servidor ao detectar mudanças no código.

## Estrutura do Projeto

- **`api.js`**: Arquivo principal que inicializa o servidor e configura as rotas.
- **`controllers/product_controller.js`**: Contém a lógica de negócio para manipulação dos produtos.
- **`models/product_model.js`**: Define o esquema do produto no MongoDB.
- **`routes/product_route.js`**: Define as rotas da API relacionadas aos produtos.

## Configuração

1. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd api_rest_node

2. Instale dependências:
   ```
   npm install

3. Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
   ```
   DB_USER=<seu_usuario_mongodb>
   DB_PASSWORD=<sua_senha_mongodb>
   DB_NAME=<nome_do_banco>
   DB_CLUSTER=<cluster_mongodb>
   PORT=<porta_do_servidor>

4. Inicie o servidor:
   - Modo de desenvolvimento:
      ```
      npm run dev
   - Modo de produção
      ```
      npm run serve

## Rotas da API
  ```
  Base URL: /api/products
  GET /: Retorna todos os produtos.
  GET /:id: Retorna um produto específico pelo ID.
  POST /: Cria um novo produto.
  PUT /:id: Atualiza completamente um produto pelo ID.
  PATCH /:id: Atualiza parcialmente um produto pelo ID.
  DELETE /:id: Remove um produto pelo ID.