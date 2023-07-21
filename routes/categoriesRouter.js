const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
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

router.get('/:cid/products/:pid', (req, res)=>{
  const {cid, pid} = req.params
  res.json({
    cid,
    pid,
  })
})

module.exports = router
