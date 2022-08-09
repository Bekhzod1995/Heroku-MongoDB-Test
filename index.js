import express from "express";

const app = express();
// const port = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send('Hello test');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`);
});