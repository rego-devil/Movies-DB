const  express = require('express');
// const  serverRenderer = require('./server.bundle');
import serverRenderer from './server.bundle';


const app = express();

app.use(express.static('public'));

app.get('/*', serverRenderer);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});