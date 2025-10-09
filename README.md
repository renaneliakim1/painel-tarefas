# Painel de Controle de Tarefas

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Um painel de controle de tarefas simples e eficiente, desenvolvido como uma atividade prática para explorar os principais Hooks do React.

## Visão Geral

Este projeto é uma aplicação de produtividade que permite aos usuários gerenciar suas tarefas diárias. Ele foi construído para demonstrar o uso prático e a sinergia de hooks essenciais do React, como `useState`, `useEffect`, `useReducer` e `useCallback`, em um ambiente TypeScript.

## Features

-   **Adicionar Tarefas**: Crie novas tarefas com título, descrição e datas de início/término.
-   **Marcar como Concluída**: Alterne o status de uma tarefa entre pendente e concluída.
-   **Remover Tarefas**: Exclua tarefas da lista.
-   **Contador de Tarefas**: Visualize o número total de tarefas e quantas estão concluídas.
-   **Persistência de Dados**: As tarefas são salvas no `localStorage` do navegador, para que não se percam ao recarregar a página.

## Tecnologias Utilizadas

-   **React**: Biblioteca para construção da interface de usuário.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **Vite**: Ferramenta de build moderna e rápida para desenvolvimento front-end.
-   **CSS Modules**: Para estilização escopada por componente.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

-   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/painel-tarefas-hooks.git
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd painel-tarefas
    ```

3.  **Instale as dependências:**

    Com npm:
    ```bash
    npm install
    ```

    Ou com yarn:
    ```bash
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Abra o navegador:**

    Acesse [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) para ver a aplicação em funcionamento.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── public/               # Arquivos estáticos
├── src/
│   ├── assets/           # Imagens e outros assets
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── ContadorTarefas/
│   │   ├── Header/
│   │   ├── Input/
│   │   └── TaskList/
│   ├── App.tsx           # Componente principal da aplicação
│   ├── main.tsx          # Ponto de entrada da aplicação
│   └── index.css         # Estilos globais
├── .gitignore
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
