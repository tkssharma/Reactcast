import path from 'path';
import express from'express';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server = express();

server.use(express.static(__dirname));
server.use(express.static(path.join(__dirname, 'dist')));

server.listen(port, () => {
  process.stdout.write(`Server listening on http://${host}:${port}. Use <ctrl-c> to stop server.`);
});
