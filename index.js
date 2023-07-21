const express = require('express');
const routerApi = require('./routes/index.js')
const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/errorHandler.js')

const app = express();
const port = 3000

app.use(express.json());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('escuchando puerto' + port);
});
