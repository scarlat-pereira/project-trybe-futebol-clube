Este projeto contém os requisitos realizados por _[Scarlat Pereira](https://www.linkedin.com/in/scarlatpereira/)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Trybe Futebol Clube

O TFC é um site informativo sobre partidas e classificações de futebol!

Nesse projeto, desenvolvi um back-end dockerizado utilizando modelagem de dados através do Sequelize. 

O desenvolvimento respeitou as regras de negócio providas no projeto e a API contruída foi capaz de consumir um front-end estruturado anteriormente.

Para adicionar uma partida é necessário ter um token, portanto a pessoa deverá estar logada para fazer as alterações. 

Existe um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas. O diagrama relacional pode ser 
visualizado a seguir.

## Banco de Dados e Layout 

 Diagrama de Entidade-Relacionamento - TFC        
:-------------------------:|
![diagrama-er](https://user-images.githubusercontent.com/108958216/231840387-a7c93e25-c925-482f-a169-323ef53af144.png)

Login Page        
:-------------------------:|
![login-page](https://user-images.githubusercontent.com/108958216/231840917-906bb86f-7b30-4605-ab48-e7a82d4d6b2f.png)

Matches Page            |  Matches Page    
:-------------------------:|:-------------------------:
![partidas-page-1](https://user-images.githubusercontent.com/108958216/231841026-d53d0bb0-761f-441c-aa72-40ebde186074.png)  |  ![partidas-page-2](https://user-images.githubusercontent.com/108958216/231841115-42f90e4f-e952-4b45-a638-96cb0cf5df2a.png)


Leaderboard Page        
:-------------------------:|
![Captura de tela de 2023-04-24 16-51-35](https://user-images.githubusercontent.com/108958216/234101371-02668314-c7a9-46d5-a3ad-01a81e7280a2.png)


---

## Demo

![Gravação de tela de 13-04-2023 15_24_49](https://user-images.githubusercontent.com/108958216/231850503-94e05d64-c161-4720-ae54-b9b31aa833de.gif)

---

## Instalação do projeto localmente:

 Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em engcivil.scarlat@gmail.com
 
 1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:scarlat-pereira/project-trybe-futebol-clube.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-trybe-futebol-clube
  npm i
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

 **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
  - Esses serviços irão inicializar os containers do banco de dados (MySQL), do backend e frontend.
  
  > :information_source: Instale as dependências [**Caso existam**] com `npm install`

  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Realizar a dockerização dos apps, network, volume e compose;
 - Modelar dados com MySQL através do Sequelize;
 - Criar e associar tabelas usando models do sequelize;
 - Construir uma API REST com endpoints para consumir os models criados;
 - Construir um CRUD com TypeScript, utilizando ORM;
 - Validar e autenticar as requisições do usuário, utilizando middlewares de manipulação de erros e JWT;
 - Aplicar a metodolodia TDD (Test Driven Development), utilizando Mocha, Chai e Sinon.

 ## Escopo do Projeto
 
 # Fluxo 1: Teams (Times)


### 1 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de times

### 2 - (TDD) Desenvolva testes que cubram no mínimo 5% dos arquivos back-end em /app/backend/src, com um mínimo de 7 linhas cobertas

### 3 - Desenvolva o endpoint /teams no back-end de forma que ele possa retornar todos os times corretamente

### 4 - (TDD) Desenvolva testes que cubram no mínimo 10% dos arquivos em /app/backend/src, com um mínimo de 19 linhas cobertas

### 5 - Desenvolva o endpoint /teams/:id no back-end de forma que ele possa retornar dados de um time específico
 
 # Fluxo 2: Users e Login (Pessoas Usuárioas e Credenciais de acesso)

### 6 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de pessoas usuárias

### 7 - (TDD) Desenvolva testes que cubram no mínimo 15% dos arquivos em /app/backend/src, com um mínimo de 25 linhas cobertas

### 8 - Desenvolva o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end

### 9 - (TDD) Desenvolva testes que cubram no mínimo 20% dos arquivos em /app/backend/src, com um mínimo de 35 linhas cobertas

### 10 - Desenvolva o endpoint /login no back-end de maneira que ele não permita o acesso com um email não cadastrado ou senha incorreta no front-end

### 11 - (TDD) Desenvolva testes que cubram no mínimo 30% dos arquivos em /app/backend/src, com um mínimo de 45 linhas cobertas

### 12 - Desenvolva um middleware de validação para o token, verificando se ele é válido, e desenvolva o endpoint /login/role no back-end de maneira que ele retorne os dados corretamente no front-end


# Fluxo 3: Matches (Partidas)

### 13 - Desenvolva em /app/backend/src/database nas pastas correspondentes, uma migration e um model para a tabela de partidas

### 14 - (TDD) Desenvolva testes que cubram no mínimo 45% dos arquivos em /app/backend/src, com um mínimo de 70 linhas cobertas

### 15 - Desenvolva o endpoint /matches de forma que os dados apareçam corretamente na tela de partidas no front-end.

### 16 - Desenvolva o endpoint /matches de forma que seja possível filtrar somente as partidas em andamento, e também filtrar somente as partidas finalizadas, na tela de partidas do front-end

### 17 - Desenvolva o endpoint /matches/:id/finish de forma que seja possível finalizar uma partida no banco de dados

### 18 -  Desenvolva o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento

### 19 - (TDD) Desenvolva testes que cubram no mínimo 60 por cento dos arquivos em /app/backend/src, com um mínimo de 80 linhas cobertas

### 20 - Desenvolva o endpoint /matches de modo que seja possível cadastrar uma nova partida em andamento no banco de dados

### 21 - Desenvolva o endpoint /matches de forma que não seja possível inserir uma partida com times iguais nem com um time que não existe na tabela de times

# Fluxo 4: Leaderboards (Placares)

### 22 - (Bônus; TDD) Desenvolva testes que cubram no mínimo 80 por cento dos arquivos em /app/backend/src, com um mínimo de 100 linhas cobertas

### 23 - Desenvolva o endpoint /leaderboard/home de forma que retorne as informações do desempenho dos times da casa com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn

### 24 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior

### 25 - Desenvolva o endpoint /leaderboard/home de forma que seja possível filtrar as classificações dos times da casa na tela de classificação do front-end, e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

### 26 - Desenvolva o endpoint /leaderboard/away de forma que retorne as informações do desempenho dos times visitantes com as seguintes propriedades: name, totalPoints, totalGames, totalVictories, totalDraws, totalLosses, goalsFavor e goalsOwn

### 27 - Desenvolva o endpoint /leaderboard/away, de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end, com os dados iniciais do banco de dados, incluindo as propriedades goalsBalance e efficiency, além das propriedades do requisito anterior

### 28 - Desenvolva o endpoint /leaderboard/away de forma que seja possível filtrar as classificações dos times quando visitantes na tela de classificação do front-end e atualizar a tabela ao inserir a partida Corinthians 2 X 1 Internacional

### 29 - Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end com os dados iniciais do banco de dados

### 30 - (Bônus) Desenvolva o endpoint /leaderboard de forma que seja possível filtrar a classificação geral dos times na tela de classificação do front-end e atualizar a tabela ao inserir a partida Flamengo 3 X 0 Napoli-SC
