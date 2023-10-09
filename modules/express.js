const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express() //Inicializa o App

app.use(express.json()) //Reconhecer Json

//Middleware
app.use((req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(`Content Type: ${req.headers["content-type"]}`);
  console.log(`Date: ${new Date()}`);
  next() //Se não utilizar o next vai impedir a chamada da req
})

//Pegar a lista de usúarios
app.get('/user', async (req, res) => { 
  try {
    const user = await UserModel.find({}); //Traz todos os itens mas podemos colocar um filtro como firstName='Lucas'
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Buscar user na lista por id 
app.get('/user/:id', async (req, res) => { 
  try {
    const id = req.params.id
    const user = await UserModel.findById(id)
    return res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

//Criar um usuário no /user
app.post('/user', async (req, res) => {
  try {
    //Enviar os dados do usúario
    const user = UserModel.create(req.body)
    res.status(201).json(user) 
  } catch (error) {
    res.status(500).send(error.message)  
  }
})

//Atualizar um user
app.patch('/user/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)    
  }
})

//Deletar um user dentro da lista 
app.delete('/user/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await UserModel.findByIdAndDelete(id)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

const port = 3000 //Registrando a porta do server
app.listen(port, () => console.log(`Rodando o express na porta ${port}`))