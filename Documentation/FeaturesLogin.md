### Casos de Teste:

#### 1. Login Válido:

* **Cenário:** ***Usuário logando com sucesso no e-commerce.***

+ Ação:

 - Usuário acessar a página de login.

 - Usuário digita o e-mail e senha cadastrado no site.
  
 - Usuário clicar no botão Login.
  
**Resultado Esperado:** ***Usuário acessa com sucesso o e-commerce e tem acesso ao catálogo de produtos.*** <br><br>
**Resultado Encontrado:** ***Usuário acessou com sucesso o e-commerce e obteve acesso ao catálogo de produtos.***

---

#### 2. Login Inválido:

* **Cenário:** ***Usuário logando com e-mail/senha incorretos.***

+ Ação:

  - Usuário acessar a página de login.

  - Usuário digita o e-mail e/ou senha incorretos.

  - Usuário clica no botão Login.

**Resultado Esperado:** ***Alerta de erro aparece com a seguinte mensagem:*** *“E-mail e/ou senha incorretos“.* <br><br>
**Resultado Encontrado:** ***Mensagem encontrada:*** *"Epic sadface: Username and password do not match any user in this service".*
