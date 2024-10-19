# Express Pipeline

ECD11 - Entrega Contínua e DevOps

Curso de Especialização em ES para Aplicações de Ciência de Dados - UFRGS

Membros: Everton Vaszelewski, Julia Stopassola e Moura, Lucas José Pereira da Costa e Medson de Oliveira Junior.

- Diagrama do Pipeline com ferramentas utilizadas:
![image](https://github.com/user-attachments/assets/954c00fa-1f37-4ba2-a089-b268f2d2454c)

- Descrição do pipeline:
Após realizado um commit direto na branch única main do repositório no Github, o build é iniciado. A instalação das dependências é triggada e executada com NPM, e após isso os Testes presentes são executados para garantir a execução plena do código. Logo, é realizada a análise da qualidade do código com ESLint e então, após estas etapas executadas, é feito o deploy para um ambiente de produção, que neste caso está sendo utilizado a plataforma Heroku.

## Pré Requisitos:
- Node 22.x
- Git
- Heroku (Para deployment local)
  
## Modo de execução:
- Clone o repositório usando `git clone`
- Instale as dependencias rodando o comando `npm install`
- Execute o projeto rodando o comando `npm start`

## Pré Requisitos de deployment automatizado:
### Crie uma aplicação no heroku [Documentação](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)
### Configure os secrets no github:
- HEROKU_API_KEY (Chave de api do seu projeto no heroku)
- HEROKU_APP_NAME (O nome do projeto no heroku)
- HEROKU_EMAIL (email da sua conta no heroku)
  
## Deploy Automatizado: [Heroku](https://shielded-tor-48351-13d2dec269ea.herokuapp.com/)

