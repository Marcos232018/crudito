const express = require('express')
const bodyParser = require('body-parser')
const buildRouter = require('./src/controllers/data').buildRouter;

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', buildRouter());

app.listen(port, () => {
  console.log(`Hi Im Running :D`)
})