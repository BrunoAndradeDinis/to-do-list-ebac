# Minhas Tarefas

Este é um projeto de lista de tarefas (to-do list) desenvolvido em React e Redux, com persistência local das tarefas no navegador. O objetivo é demonstrar uma base sólida adquirida através dos meus estudos, customização, aplicação de lógicas e evolução.

## Funcionalidades

- Cadastro, edição e remoção de tarefas.
- Marcação de tarefas como concluídas ou pendentes.
- Filtros por status (pendente, concluído) e prioridade (urgente, importante, normal).
- Busca de tarefas por título.
- Contador de tarefas por filtro.
- Persistência automática das tarefas no localStorage (as tarefas permanecem salvas mesmo após fechar/recarregar o navegador).
- Navegação entre tela de listagem e tela de cadastro de tarefas.
- Estrutura de componentes reutilizáveis e containers.
- Código organizado e pronto para manutenção e evolução.


## Estrutura do Projeto

- `src/components/`: Componentes reutilizáveis, como Botão de Adicionar, FiltroCard, Tarefa, etc.
- `src/containers/`: Containers responsáveis por lógica de apresentação e conexão com o Redux (ex: ListaDeTarefas, Formulario, BarraLateral).
- `src/pages/`: Páginas principais do app (Home, Cadastro).
- `src/store/`: Configuração do Redux, reducers de tarefas e filtros.
- `src/models/`: Tipos e classes de dados (ex: Tarefa).
- `src/utils/enums/`: Enums de prioridade e status das tarefas.
- `src/styles/`: Estilização global e componentes estilizados.

## Como Funciona

- **Listagem:** A tela inicial exibe todas as tarefas cadastradas, com filtros por status e prioridade, além de busca por título.
- **Cadastro:** O botão "+" leva à tela de cadastro, onde é possível criar uma nova tarefa informando título, descrição e prioridade.
- **Edição:** Cada tarefa pode ser editada (exceto se já estiver concluída).
- **Remoção:** Tarefas podem ser removidas a qualquer momento.
- **Conclusão:** Marque/desmarque tarefas como concluídas usando o checkbox.
- **Filtros:** Use a barra lateral para filtrar tarefas por status, prioridade ou visualizar todas.
- **Persistência:** Todas as operações são refletidas imediatamente no localStorage.

## Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd to-do-list-ebac
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o projeto:
   ```bash
   npm start
   ```
4. Acesse em [http://localhost:3000](http://localhost:3000).

Caso prefira, tem o deploy no link abaixo
- [Deploy](vercel.com)

## Tecnologias Utilizadas

- React
- TypeScript
- Redux (@reduxjs/toolkit)
- React Redux
- React Router DOM
- styled-components

## Estrutura dos Dados

Foi criado a classe Tarefa e cada tarefa possui os seguintes campos:

- `id`: número sequencial único
- `titulo`: string
- `descricao`: string
- `prioridade`: 'urgente' | 'importante' | 'normal'
- `status`: 'pendente' | 'concluído' | 'em andamento'

## Contribuição

Contribuições são bem-vindas! Para sugerir melhorias, siga os passos:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-melhoria
   ```
3. Faça suas alterações e envie um pull request com uma descrição clara do que foi alterado.

## Observações Importantes

- O projeto **não possui responsividade para dispositivos móveis**. O layout é focado em desktop.
- Por ser focado no Front não há integração com backend: todas as tarefas são salvas apenas no navegador do usuário e também não há autenticação de usuários.
- Sendo assim, é um projeto voltado e focado inteiramente no meus estudos de front-end e aplicação dos meus novos conhecimentos com Redux e React-router-dom.

## Licença

Projeto com fins educacionais, livre para uso e modificação.
