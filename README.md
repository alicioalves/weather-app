# Weather App

SPA mobile first desenvolvido em React.js.

*O usuário informa a cidade que deseja consultar as informações de clima atuais. Ao começar a digitar, uma database de cidades é consultada e as cidades que começam com o prefixo digitado são retornadas para o usuário em uma lista. Após informar a ciddade, informações como temperatura, descrição do clima e umidade são retornadas na tela.

## Bibliotecas 

As bibliotecas usadas foram:

* Para melhor organização do código e responsibilidade foi utilizado [styled-component](https://styled-components.com/)
* Para a lista de cidades, foi usado o [react-select](https://react-select.com/home)
* Para fazer as requisições das APIs e retornar o resultado foi usado o [axios](https://axios-http.com/)
* Para atrasar o tempo entre requisições da API e evitar calls desnecessárias foi usado o [lodash-debounce](https://lodash.com/)
* Para fazer as rotas, foi usado o [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
* As APIs utilizadas foram: [GeoDB Cities](http://geodb-cities-api.wirefreethought.com/) e o[OpenWeather](https://openweathermap.org/)

Como rodar o projeto

>npm para instalar as bibliotecas
>npm start para rodar o projeto
