const app = require('./app');
const config = require('./config/config');

// eslint-disable-next-line import/order
const http = require('http');
// socket initialization
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log('SERVER');
    console.log(`Listening to port ${config.port}`);
});
