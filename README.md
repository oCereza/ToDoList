# To-Do List

Este projeto é uma aplicação de Lista de Tarefas (To-Do List) com **backend** em Node.js/Express e **frontend** em HTML, CSS e JavaScript puro.

## Funcionalidades

- Adicionar, editar, excluir e listar tarefas.
- Alterar o status das tarefas (pendente, em andamento, concluída).
- Interface web simples e intuitiva.
- Backend conectado a um banco de dados MySQL.

## Estrutura do Projeto

```
backend/    # API Node.js/Express
front-end/  # Interface web
```

## Como rodar o projeto

### 1. Clone o repositório

```sh
git clone <URL_DO_REPOSITORIO>
cd ToDoList
```

### 2. Configurar o backend

1. Entre na pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Copie o arquivo `.env.example` para `.env` e preencha com os dados do seu banco MySQL:
   ```
   PORT=3000
   MYSQL_HOST=localhost
   MYSQL_USER=seu_usuario
   MYSQL_PASSWORD=sua_senha
   MYSQL_DB=nome_do_banco
   ```
4. Crie o banco de dados e a tabela `tasks` no MySQL:
   ```sql
   CREATE DATABASE nome_do_banco;
   USE nome_do_banco;
   CREATE TABLE tasks (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,
     status VARCHAR(50) DEFAULT 'pendente',
     created_at DATETIME
   );
   ```
5. Inicie o backend:
   ```sh
   npm run dev
   ```
   O servidor irá rodar na porta definida no `.env` (padrão: 3000).

### 3. Rodar o front-end

1. Abra o arquivo `front-end/index.html` no seu navegador.
2. A interface irá se conectar automaticamente ao backend para exibir e manipular as tarefas.

---

## Observações

- Certifique-se de que o backend está rodando antes de abrir o front-end.
- O front-end faz requisições para `http://localhost:3000`.

---

![image](https://github.com/user-attachments/assets/425a6e83-3715-49f7-be37-01e9da563c55)

