const express = require('express');

const app = express();
const port = process.env.port || 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes'));
app.listen(port, (err) => {
  if(err) {
    throw err;
  } else {
    console.log(`Server is up and running on port ${port}`);
  }
});

