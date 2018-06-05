const express = require('express');
const next = require('next');
const serverRenderer = require('../../public/server.bundle');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(app.prepare())

app.prepare()
  .then(() => {
    console.log('222');
    const server = express();

    server.use(express.static('public'));
    
    server.get('/*', (serverRenderer) => {
      return handle(serverRenderer)
    })
    
    server.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });

})
