# 📦 API CRUD de Produtos

API Backend desenvolvida com **Node.js** e **Express** para demonstrar as operações básicas de **CRUD** (Create, Read, Update, Delete).

---

## *📖 Sobre o Projeto

Esta aplicação é uma API REST Backend responsável por gerenciar produtos através de endpoints REST.

Cada produto possui os seguintes atributos:

* **id** → Identificador único do produto
* **nome** → Nome do produto
* **preco** → Valor do produto

A aplicação utiliza um **array em memória** para simular um banco de dados.

---

## **🧰 Tecnologias Utilizadas**

* Node.js
* Express.js
* Postman

---

## **📚 Documentação da API**

A documentação completa da API pode ser acessada no link abaixo:

***🔗 Documentação no Postman***

https://documenter.getpostman.com/view/19569624/2sBXcLec9Y

---

## **⚙️ Como Executar o Projeto**

### ***1️⃣ Clonar o repositório***

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
ou 

### ***📂 Criar pasta***

```bash
npm init -y
```
---

### ***2️⃣ Instalar dependências***

```bash
npm install express
npm install nodemon --save-dev   
```

---

### ***3️⃣ Executar o servidor***

```bash
npm run dev
```

ou

```bash
node server.js
```

---

## **🚀 Endpoints da API**

### - POST /produtos => ***Criar Produto***

### - GET /produtos => ***Listar Produtos***

### - GET /produtos/:id => ***Listar Produtos por {ID}***

### - PUT /produtos/:id => ***Atualizar Produtos por {ID}***

### - DELETE /produtos/:id => ***Remover Produtos por {ID}***

---

## **📌 Status HTTP Utilizados**

* **200** → Sucesso
* **201** → Recurso criado
* **204** → Removido com sucesso
* **404** → Recurso não encontrado

---

## **🧠 Lógica Utilizada na API**

Alguns métodos de JavaScript foram utilizados para manipular os dados do array que simula o banco de dados.

| Código | O que faz |
|------|------|
| `find()` | busca um item |
| `filter()` | cria novo array filtrado |
| `p.id == id` | mantém apenas o item correspondente ao ID |
| `p.id != id` | remove o item correspondente ao ID |

Esses métodos permitem buscar, atualizar e remover produtos dentro da aplicação.
---

## **👨‍💻 Autor**

Projeto desenvolvido para prática de **CRUD com API REST usando Express**.

<table>
<tr>
  <td align="center">
    <img src="https://avatars.githubusercontent.com/u/87991807?v=4" width="80" />
  </td>
  <td>
    **RafaRaizer-Dev** <br>
    <a href="https://api.whatsapp.com/send/?phone=47999327137">📱 WhatsApp</a> | 
    <a href="https://www.linkedin.com/in/raizer-rafael/">💼 LinkedIn</a> | 
    <a href="https://github.com/RaizerTechDev">🐱 GitHub</a> | 
    <a href="https://raizertechdev-portfolio.netlify.app/">🌐 Portfólio</a>
  </td>
</tr>
</table>

