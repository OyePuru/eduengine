import express from 'express';

const app = express();
const port = process.env.port || 8000;

app.listen(port, (err) => {
  if(err) {
    throw err;
  } else {
    console.log(`Server is up and running on port ${port}`);
  }
});