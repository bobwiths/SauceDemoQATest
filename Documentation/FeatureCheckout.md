### Casos de Teste:

#### 1. Adicionar itens no carrinho, visualizar no carrinho e retirar um item:

* **Cenário:** ***Cliente adicionou 3 itens ao carrinho e precisa verificar se pode retirar algum item.***

+ **Ação:**

  - Adicionar os 3 primeiros itens do carrinho.

  - Clicar no carrinho.

  - Remover o segundo item do carrinho.
  
  - Clicar em checkout.
  
  - Digitar o primeiro nome.
  
  - Digitar o último nome.
  
  - Digitar o CEP.
  
  - Clicar em continuar.
  
  - Verificar se consta 2 itens no checkout.
  
  - Clicar em Finish.
  
  - Verificar a mensagem de “checkout: complete!”.
  
  - Clicar no botão “back home”.

**Resultado Esperado:** ***Usuário adicionar 3 itens e remover 1 item do seu carrinho e completar a compra.*** <br><br>
**Resultado Encontrado:** ***Usuário adicionou 3 itens ao carrinho e após clicar no carrinho removeu o segundo item e completou o pedido.***

---

#### 2. Adicionar itens no carrinho, visualizar no carrinho e finalizar o checkout:

* **Cenário:** ***Cliente irá comprar 3 itens.***

+ **Ação:**

  - Adicionar os 3 primeiros itens ao carrinho.
  
  - Clicar no carrinho.
  
  - Clicar em checkout.
  
  - Digitar o primeiro nome.
  
  - Digitar o último nome.
  
  - Digitar o CEP.
  
  - Clicar em continuar.
  
  - Verificar se consta 3 itens no checkout.
  
  - Clicar em Finish.
  
  - Verificar a mensagem de “checkout: complete!”.
  
  - Clicar no botão “back home”.

**Resultado Esperado:** ***Usuário consegue completar sua compra de 3 itens*** <br><br>
**Resultado Encontrado:** ***Usuário conseguiu completar a sua compra de 3 itens simultâneos***

---

#### 3. Adicionar itens no carrinho, visualizar no carrinho e tentar finalizar o checkout sem digitar o primeiro nome:

* **Cenário:** ***Cliente vai comprar 3 itens, porém não vai digitar o primeiro nome no campo solicitado.***

+ **Ação:**

  - Adicionar os 3 primeiros itens ao carrinho.
  
  - Clicar no carrinho.
  
  - Clicar em checkout.
  
  - Não digitar o primeiro nome.
  
  - Digitar o último nome.
  
  - Digitar o CEP.
  
  - Clicar em continuar.
  
  - Verificar se aparece mensagem “Error: First Name is required”.

**Resultado Esperado:** ***Mensagem de erro por não digitar o primeiro nome.*** <br><br>
**Resultado Encontrado:** ***A seguinte mensagem de erro apareceu:*** *"Error: First Name is required"*

