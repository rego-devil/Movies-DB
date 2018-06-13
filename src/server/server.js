const express = require('express');

const serverRenderer = require('../../public/server.bundle');

const server = express();

server.use(express.static('public'));

server.get('/*', serverRenderer);

server.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
