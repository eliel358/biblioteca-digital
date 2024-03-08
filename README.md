
# Biblioteca digital

Durante meu período de estudo na Escola Assis Chateaubriand, identifiquei uma oportunidade de contribuir para a comunidade escolar e aprimorar minhas habilidades ao mesmo tempo. Decidi criar o biblioteca digital, visando facilitar as atividades dos bibliotecários e melhorar a eficiência do processo.Vale ressaltar que este projeto é uma iniciativa voluntária, sem fins lucrativos, dedicada à melhoria da escola.
## Autor

- [Eliel Henrique](https://www.linkedin.com/in/eliel-henrique-039833282/)

## Usado por

Esse projeto é usado pela Escola Estadual Assis Chateaubriand

## Funcionalidades

- Emprestimo de livros
- Devolução de livros
- Listagem de livros
- Banco de dados: Google Spreadsheets


## Rodando localmente

### Clone o projeto

```bash
  git clone https://github.com/eliel358/biblioteca-digital.git
```

### Entre no diretório do projeto

```bash
  cd biblioteca-digital
```

### Instale as dependências

```bash
  npm install
```

- Crie uma chave de serviço no Google Cloud console para o Google Spreadsheet
- Gere um arquivo .json com susas credenciais
- Renomeie o nome do arquivo para credentials.json e mova-o para a pasta principal do projeto

### Inicie o projeto

```bash
  npm run start
```


## api.js

### Retornar todos os livros

```bash
    getTable()
```

| Nome do livro   | Registro do livro | Autor do livro | Aluno que fez o emprestimo| Turma do aluno | Turno do aluno | Data de emprestimo| Data de devolução |
| :---------- | :--------- | :---------------------------------- |-|-|-|-|-
| `Dom Casmurro` | `101` | `Machado de Assis` | `Ana` | `2A` | `Tarde` |`28/02/2024`|`07/03/2024`

#### Formato do retorno
``json 
[
  'Dom Casmurro',
  '101',
  'Machado de Assis',
  'Ana',
  '2A',
  'Tarde', 
  '28/02/2024',
  '07/03/2024'
]
``
