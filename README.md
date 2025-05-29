# AlmoxTech

Sistema de Controle de Almoxarifado/Estoque focado em simplificar a gestão de materiais e insumos para empresas.

## Sobre o Projeto
O AlmoxTech é uma aplicação desenvolvida para gerenciar o controle de estoque e almoxarifado, permitindo o cadastro, movimentação e acompanhamento de materiais de forma eficiente e organizada.
O sistema ajuda empresas a manter o controle dos itens armazenados, reduzindo perdas e otimizando a reposição.

## Funcionalidades

- Cadastro de produtos/materiais com informações detalhadas (nome, quantidade, categoria, fornecedor, etc).

- Controle de entrada e saída de itens no estoque.

- Consulta rápida do saldo atual de cada material.

- Histórico de movimentações para auditoria e controle.

- Relatórios simples para acompanhamento da situação do almoxarifado.

- Interface amigável e organizada (se tiver front) ou API REST (se backend).


## Tecnologias Utilizadas

- Node.js com TypeScript para backend (NestJS)

- Banco de dados (MySQL, PostgreSQL, MongoDB, etc)

- Ferramentas de versionamento: Git e GitHub


## Como Executar o Projeto

1. Clone o repositório:
```
git clone git@github.com:Joao-VictorCm/AlmoxTech.git
```

2. Instale as dependências:
```
npm install ou yarn install
```

3. Configure o arquivo .env com as variáveis de ambiente (exemplo: conexão com banco de dados).

4. Execute a aplicação:
```
npm run start ou yarn start
```

5. Acesse via http://localhost:3000 (ou outra porta configurada).


## Próximos Passos / Melhorias

- Implementar autenticação de usuários.

- Criar dashboard com gráficos para análise do estoque.

- Automatizar notificações para reposição de materiais.

- Melhorar testes automatizados e cobertura.

- Documentar API com Swagger.

