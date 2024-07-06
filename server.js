const express = require('express');
const app = express();
  
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Personal Budget app!</h1>');
});
  
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});