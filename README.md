# Sistema de contorole de estoque, vendas e despesas

# Como executar
Para executar o projeto certifique de ter o docker instalado em sua máquina

Abra o terminal dentro da pasta do projeto e execute o comando:

```docker-compose up```

Em seguida o servidor irá rodar na porta 3000

# Testando a api
Para verificar se o servidor iniciou correntamente abra o navegador e entre no endereço ```http://localhost:3000/ping```
isto deve retornar:

```json
{
  "message": "pong"
}
```

# Documentação das rotas

A seguir, estão listados todas as rotas disponíveis na API com seus respectivos endpoints e retornos em JSON.

Rota POST /products-registration

Endpoint utilizado para registrar um novo produto.

Exemplo de entrada:


```json
{
  "name": "Produto A",
  "price": 10.50,
  "sale_price": 15.20,
  "quantity": 100,
  "due_date": "2023/03/05"
}
```
Exemplo de retorno em JSON:

```json

{
  "id": "28543c30-de38-4def-a4c4-699cc25faadc",
	"name": "Produto A",
	"price": 10.5,
	"quantity": 100,
	"sale_price": 15.2,
	"due_date": "2023/03/05",
}
```
Rota GET /get-products

Endpoint utilizado para obter a lista de todos os produtos registrados.

Exemplo de retorno em JSON:

```json

[
	{
		"id": "28543c30-de38-4def-a4c4-699cc25faadc",
		"name": "Produto A",
		"price": 10.5,
		"quantity": 100,
		"sale_price": 15.2,
		"due_date": "2023-03-05"
	},
	{
		"id": "b4aaf07b-c40e-4e95-b29f-4ca8c4ca0280",
		"name": "Produto A",
		"price": 10.5,
		"quantity": 100,
		"sale_price": 15.2,
		"due_date": "2023-03-05"
	}
]
```
Rota GET /get-products/:name

Endpoint utilizado para obter um produto específico pelo nome.

Exemplo de retorno em JSON:

```json

{
  "id": "f7631727-4296-4fea-9b28-df8a543cd83e",
	"name": "Produto B",
	"price": 10.5,
	"quantity": 100,
	"sale_price": 15.2,
	"due_date": "2023-03-05"
}
```
Rota PUT /edit/product/:id

Endpoint utilizado para editar as informações de um produto específico.

Exemplo de entrada:

```json
{
  "id": 1,
  "name": "Produto B",
  "price": 15.50,
  "sale_price": 10.50,
  "due_date": "2023-03-05",
  "quantity": 10,
}
```
Exemplo de retorno em JSON:

```json
{
  "id": 1,
  "name": "Produto A atualizado",
  "price": 15.00,
  "quantity": 200,
  "created_at": "2022-03-05T14:30:00.000Z",
  "updated_at": "2022-03-05T15:30:00.000Z"
}
```

Rota DELETE /delele/product/:id

Endpoint utilizado para deletar um produto específico.

Exemplo de retorno em JSON:

```json
{
  "message": "Produto deletado com sucesso"
}
```
Rota POST /add-sold-in

Endpoint utilizado para adicionar uma venda de um produto.

Exemplo de entrada:

```json

{
  "product_id": 1,
  "quantity": 10
}
```

GET /get-all-sales

Esta rota é responsável por retornar todas as vendas registradas no sistema. A rota é manipulada pelo GetAllSalesControllers, que é responsável por recuperar as vendas do banco de dados e retorná-las ao cliente.

Exemplo de resposta:

```json
[
  {   
      "id": 1,   
      "name": "Camiseta",   
      "price": 39.99,    "quantity": 2,   
      "sold_at": "2023-03-06T12:00:00.000Z" 
  }, 
  {   
     "id": 2,
     "name": "Calça",
     "price": 89.99,
     "quantity": 1,
     "sold_at": "2023-03-06T13:00:00.000Z" 
   }
]
```
DELETE /delete/sale/:id

Esta rota é responsável por deletar uma venda específica do sistema. O ID da venda a ser deletada deve ser passado como um parâmetro na URL da requisição. A rota é manipulada pelo DeleteSaleController, que é responsável por deletar a venda do banco de dados.

Exemplo de URL da requisição:

sql

DELETE /delete/sale/1

Exemplo de resposta:

```json

{
  "message": "Venda deletada com sucesso!"
}
```
POST /create-new-exit

Esta rota é responsável por adicionar uma nova despesa ao sistema. O corpo da requisição deve conter as informações da despesa, como nome e valor. A rota é manipulada pelo ExitExpanseController, que é responsável por lidar com a lógica de negócios relacionada a esse processo.

Exemplo de corpo da requisição:

```json

{
  "name": "Aluguel",
  "value": 1500.00
}
```
Exemplo de resposta:

```json

{
  "id": 1,
  "name": "Aluguel",
  "value": 1500.00,
  "created_at": "2023-03-06T12:00:00.000Z"
}
```
GET /get-exits-expanses

Esta rota é responsável por retornar todas as despesas registradas no sistema. A rota é manipulada pelo GetAllExitExpanseController, que é responsável por recuperar as despesas do banco de dados e retorná-las ao cliente.

Exemplo de resposta:

```json
[
   {
      "id":1,
      "name":"Aluguel",
      "value":1500.00,
      "created_at":"2023-03-06T12:00:00.000Z"
   },
   {
      "id":2,
      "name":"Água",
      "value":100.00,
      "created_at":"2023-03-06T13:00:00.000Z"
   }
]
```
PUT /update/exit/expanses/:id

Esta rota é responsável por atualizar uma despesa específica do sistema. O ID da despesa a ser atualizada deve ser passado como um parâmetro na URL da requisição. A rota é manipulada pelo UpdateExitsController, que é responsável por atualizar a despesa no banco de dados.

Exemplo de corpo da requisição:

```json

{
  "description": "Compra de material de escritório",
  "value": 500.00,
  "date": "2023-03-06"
}
```
Exemplo de URL da requisição:

PUT /update/exit/expanses/1

Exemplo de resposta:

```json

{
  "id": 1,
  "description": "Compra de material de escritório",
  "value": 500.00,
  "date": "2023-03-06",
  "updated_at": "2023-03-06T14:30:00.000Z"
}
```
DELETE /delete/exit/:id

Esta rota é responsável por deletar uma despesa específica do sistema. O ID da despesa a ser deletada deve ser passado como um parâmetro na URL da requisição. A rota é manipulada pelo DeleteExitController, que é responsável por deletar a despesa do banco de dados.

Exemplo de URL da requisição:

perl

DELETE /delete/exit/1

Exemplo de resposta:

```json

{
  "message": "Despesa deletada com sucesso!"
}
```
