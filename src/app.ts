import express from 'express';

const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('This is Godzilla!');
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
