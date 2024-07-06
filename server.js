const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
  
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Personal Budget app!</h1>');
});

const apiRouter = require('./back-end/api');
app.use('/api', apiRouter);
  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});