Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

# React FIPE - Alex Sandro A. Souza @asasouza

## Configurando o ambiente de desenvolvimento
1. Acesse o repositório do projeto hospedado no <a href='https://github.com/asasouza/react-fipe'>Github</a> e clone-o para o diretório desejada através do comando <code>git clone https://github.com/asasouza/react-fipe.git</code>.
	- Obs: Caso opte por não realizar a operação anterior pelo <i>git</i> é possível realizar o download do projeto no formato <i>.zip</i> e descompacta-lo no diretório de preferência.
2. Com o prompt de comando de seu sistema operacional, vá a pasta onde o projeto foi salvo e execute o comando <code>npm install</code>. Este comando instalará todas as dependências listadas na aplicação.
	- Caso não possua, é necessária a instalação do npm, disponível através deste <a href="https://www.npmjs.com/get-npm">link</a>
3. Com as dependências instaladas, execute o comando <code>npm start</code> dentro do diretório do projeto. Isto deve iniciar um servidor local de testes da aplicação. Assim abra o navegador no endereço <code>localhost:3000</code> e teste-a.

## Estrutura de arquivos
A aplicação é divida na seguinte hierarquia de diretórios:

	|-src
		|- components
			|- common
			|- home
		|- config
			|- routes.js
		|- pages
		|- providers
		|- stores
		App.js
		index.js
		index.css

Os dados para teste e exibição foram todos coletados da API publica <a href="http://deividfortuna.github.io/fipe/">FIPE API HTTP REST</a>.

## Gerando arquivos de produção
Para gerar os arquivos de produção é necessário executar no diretório do projeto o comando <code>npm run build</code>. Este gerará a pasta contendo toda o código unificado e minificado da aplicação e importará as imagens, fontes e css necessários e utilizados pela aplicação.

## Tecnologias
Foram utilizadas as seguintes tecnologias para desenvolvimento desta aplicação de teste:

		- React JS;
		- Mobx + Mobx React;
		- React Router DOM;
		- Create React App
		- Javascript ES6 + Babel;
		- Bootstrap 4;
		- HTML + CSS;
		- ESLint;
