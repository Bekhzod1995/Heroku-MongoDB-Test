import express from "express";

const app = express();
const port = 8888;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send('Hello test');
});

app.get('/working', (req, res) => {
  res.send('yesss');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port ${port}`);
});