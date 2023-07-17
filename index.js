const express = require('express');
const {faker} = require('@faker-js/faker')

const app = express();
const port = 3000

app.get('/', (req, res)=>{
  res.send('Hola mi server en express')
})

app.get('/products', (req, res)=>{
  const {size} = req.query
  const products = []
  const limit = size || 5
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products)
})

app.get('/product/:id', (req,res) => {
  const {id} = req.params
  res.json({
      id,
      name:'P-3',
      price: 3000
  })
})

app.get('/categories', (req, res)=>{
  res.json([
    {
      name:'C-1',
    },
    {
      name:'C-2',
    },
    {
      name:'C-3',
    },
    {
      name:'C-4',
    },
  ])
})

app.get('/categorie/:cid/products/:pid', (req, res)=>{
  const {cid, pid} = req.params
  res.json({
    cid,
    pid,
  })
})

app.get('/users', (req, res)=>{
  const {limit, offset} = req.query

  if(limit && offset){
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }

})

app.listen(port, ()=>{
  console.log('escuchando puerto' + port)
})
