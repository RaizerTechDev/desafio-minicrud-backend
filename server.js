const express = require("express") // * Importa o Express
const app = express() // * Cria a aplicação
const PORT = 3000  // * Rodar na porta 3000

app.use(express.json()) // * Permite ler JSON no body das requisições

// * Banco de Dados"* Nova variavel para gerar o ID automático fake (array em memória)
let produtos = [
  {
    id: 1,  
    nome: "Mouse",
    preco: 65.00
  },  
    {
    id: 2,    
    nome: "Teclado",
    preco: 120.00
  }    
]

// * Rota Principal
app.get("/", (req, res) => {
  res.send("API CRUD de Produtos!")
})

// * CREATE → Usando push() para criar o produto + req.body para Dados Enviados
app.post("/produtos", (req, res) => {
  const {nome, preco} = req.body
  
  // Criar nova variável
  const novoProduto = {
    id: produtos.length + 1, // * Para gerar ID automático simples
    nome,
    preco,
  }

  // * Adicionar o novo produto no array com push 
  produtos.push(novoProduto) 

  // * Retorna o produto criado
  res.status(201).json(novoProduto)  
})

// * READ → Listar produtos 
app.get("/produtos", (req, res) => {
  res.status(200).json(produtos)
})

// * READ → Listar produtos com req.params para capturar ID e por ID find() para buscar o produto pelo ID
app.get("/produtos/:id", (req, res) => {
  const { id } = req.params // * Captura o ID da Rota
  
  const produto = produtos.find(p => p.id == id) // * Busca produto pelo ID

  // * Se não existir
  if(!produto) {
    return res.status(400).json({ mensagem: "Produto não encontrado!"})
  }

  // * Retorna o produto listado por ID
  res.status(200).json(produto)
})

// * UPDATE → Atualizar produto com req.params para capturar ID , req.body para Pegar Novos Dados e por ID find() para buscar o produto pelo ID
app.put("/produtos/:id", (req, res) => {
  const { id } = req.params // * Captura o ID da Rota
  const {nome, preco} = req.body // * para Pegar Novos Dados

  const produto = produtos.find(p => p.id == id) // * Buscar Produto pelo ID

  // * Se não existir
  if(!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado!"})
  }

  // * Aqui atualiza nome e preço
  produto.nome = nome 
  produto.preco = preco 

  // * Retorna o produto listado por ID
  res.status(200).json(produto)
})

// * DELETE - Remover Produto com req.params para capturar ID, find() para buscar o produto pelo ID e filter para remover o produto
app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params  // * Captura o ID da Rota

  const produto = produtos.find(p => p.id == id) // * Buscar Produto pelo ID

  // * Se não existir
  if(!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado!"})  
}

  // * Remove o produto criando um novo array sem ele
  produtos = produtos.filter(p => p.id != id)

 // * Retorna No Content
  res.status(204).send()
})

// * listen vai ouvir a porta 3000 e rodar o servidor no terminal
app.listen(PORT, () =>{
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
