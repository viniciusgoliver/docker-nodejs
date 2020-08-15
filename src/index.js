const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({message: "DOCKER NODEJS"});
});

app.listen(3333);
