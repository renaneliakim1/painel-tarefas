#  Atividade Prática – Explorando Hooks no React

##  Objetivo
Aplicar os conceitos dos **React Hooks** (`useState`, `useEffect`, `useCallback`, `useReducer`) para criar componentes funcionais dinâmicos, que gerenciem estado e efeitos colaterais de forma eficiente.

---

##  Contexto da Atividade
Imagine que você está desenvolvendo um **painel de controle de tarefas** para um aplicativo de produtividade.  
Esse painel deverá permitir **adicionar**, **remover** e **marcar tarefas como concluídas**, além de **exibir o total de tarefas pendentes**.  

Durante o desenvolvimento, você perceberá a importância dos **Hooks**:
- `useState` para armazenar os dados (tarefas, status, etc.);
- `useEffect` para reagir a mudanças no estado e salvar as tarefas no navegador (simulando um banco local);
- `useCallback` para otimizar funções que são chamadas repetidamente;
- `useReducer` para organizar melhor a lógica de atualização do estado.

---

##  Instruções

1. Crie um novo projeto React com **TypeScript + SWC**:
   ```bash
   npm create vite@latest painel-tarefas -- --template react-swc-ts
   cd painel-tarefas
   npm install
   npm run dev
   ```

2. Crie um componente principal chamado `App.tsx` que servirá como ponto de partida.

3. No componente, implemente:
   - Uma lista de tarefas (`useState` ou `useReducer`);
   - Um campo de entrada para adicionar novas tarefas;
   - Um botão para remover tarefas;
   - Uma contagem automática de tarefas pendentes (usando `useEffect`);
   - Uma função otimizada com `useCallback` para marcar tarefas como concluídas.

4. A interface pode ser simples, mas deve ser **funcional e clara**.  
   Use elementos básicos do HTML (input, button, ul/li, etc.).

---

##  Desafios Extras
- Salve e carregue as tarefas do **localStorage**;
- Adicione um botão para **limpar todas as tarefas concluídas**;
- Mostre uma mensagem condicional caso **não existam tarefas**.

---

##  Entrega
- Crie um **repositório no GitHub** com o nome `painel-tarefas-hooks`.
- Faça commits representando o progresso da implementação.
- Envie o link do repositório no **canal da turma**.

---

##  Critérios de Avaliação
| Critério | Descrição | Pontuação |
|-----------|------------|-----------|
| Organização do código | Componentes bem estruturados e reutilizáveis | 2 pts |
| Uso correto dos Hooks | Aplicação adequada de `useState`, `useEffect`, `useCallback` e/ou `useReducer` | 3 pts |
| Funcionalidade completa | Tarefas sendo adicionadas, marcadas e removidas corretamente | 2 pts |
| Estilo e clareza da interface | Layout simples e compreensível | 1 pt |
| Boas práticas de versionamento | Commits claros e organizados no GitHub | 2 pts |

**Total: 10 pontos**

---

##  Referências
- [Documentação oficial do React – Hooks](https://react.dev/learn/state-a-components-memory)
- [Documentação do useEffect](https://react.dev/reference/react/useEffect)
- [Documentação do useReducer](https://react.dev/reference/react/useReducer)
- [Documentação do useCallback](https://react.dev/reference/react/useCallback)

---

 **Desafio final:**  
Adapte esse projeto para outro contexto (como um painel de alunos, lista de compras ou controle de treinos), aplicando os mesmos conceitos aprendidos.