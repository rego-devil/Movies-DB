import express from 'express';
import {serverRenderer} from './server-renderer';


const app = express();

app.use(express.static('public'));
// app.use(serverRenderer());

app.get('/*', serverRenderer());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});