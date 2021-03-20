<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://marco-my-hero-academia.netlify.app/">
    <img src="src/assets/logo.png" alt="Logo" width="135">
  </a>

  <h3 align="center">React My Hero Academia</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#prerequisites">Pré Requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
				<li><a href="#tests">Testes Unitários</a></li>
      </ul>
    </li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started
Esse projeto foi realizado utilizando: ReactJS, React Hooks, Eslint, Prettier, EditorConfig, PropTypes, Yarn, StyledComponents, FontAwesome, Axios, React Toastify, TestingLibrary, Jest, Netlify.

Para usar a aplicação basta acessar o endereço abaixo e navegar entre as páginas visualizando os personagens.

Link do projeto: https://marco-my-hero-academia.netlify.app/

### Prerequisites

Para instalar o projeto na sua máquina é necessário ter o Node instalado. Também é necessário instalar o Yarn:
* npm
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone o repositório
	```sh
	git clone https://github.com/marcoalvesalmeida/my-hero-academy.git
	```
2. Instale os pacotes necessário na pasta do projeto usando:
	```sh
	yarn
	```
3. O link da API é configurado no arquivo `.env` (Que já está no projeto)
   ```JS
   REACT_APP_API_ENDPOINT=https://myheroacademiaapi.com/api/
   ```
4. Para executar o projeto basta utilizar o comando:
   ```sh
   yarn start
   ```
5. Acesse localmente em: http://localhost:3000

### Tests

Os testes do projeto foram criados usando a biblioteca Testing Library e compõe uma série de verificações acerca dos componentes da aplicação. Há testes para os componentes Header, Menu, Loading e Pagination. O processo é composto por uma Suite e 5 testes.

1. Para executar os testes basta utilizar o comando:
	```sh
	yarn test --watchAll
	```


