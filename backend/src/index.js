require('dotenv').config({ path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

//todo use experss middlware to handle cookies (JWT)
//todo use express middleware to populate current user 

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
},
deets => {
    console.log('Server is now running on port https:/localhost:${deets.port}');
}
);