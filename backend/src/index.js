import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import refactor from './endpoints/refactor';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/refactor', refactor);

app.listen(process.env.API_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at ${process.env.API_HOST}:${process.env.API_PORT}/`);
});
