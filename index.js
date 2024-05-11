require("dotenv").config();
const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
  console.log('GET /', req.body);
  res.send(req.body);
})

app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
})