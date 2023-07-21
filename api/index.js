const express = require('express');
const cors = require('cors')
const routerApi = require('./routes/index.js')
const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/errorHandler.js')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

// const whiteList = ['http://localhost:3000'];
// const options = {
//   origin: () => {
//     origin: (origin, callback) => {
//       if (whiteList.includes(origin)){
//         callback(null, true)
//       } else{
//         callback(new Error('no permitido'))
//       }
//     }
//   }
// }
// app.use(cors(options))

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);


app.listen(port, ()=>{
  console.log('escuchando puerto' + port);
});
