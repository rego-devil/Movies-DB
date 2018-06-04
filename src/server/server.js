const express = require('express');
const serverRenderer = require('../../public/server.bundle');

const app = express();

app.use(express.static('public'));

app.get('/*', serverRenderer);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});