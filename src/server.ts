const express = require('express')
import { Response, Request } from 'express'
const app = express()

app.set('view engine', 'engine')

//Definição de rotas
app.get('/', (req: Request, res: Response) => {
  
  const mensagem: string = 'Olá, viajante!!! Seja bem vindo!!'
  res.send(mensagem)
  
})

//Conexão com servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})