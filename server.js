const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler(); 

app.prepare().then(() => {
  const server = express();
  const port = 3000;  

  server.all('*', (req, res) => {
    return handle(req, res); 
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});