const expess = require('express');
const cors = require('cors')

const server = expess();
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

server.use(expess.json());
server.use(cors())

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res)=>{
    res.send('server is up');
})

module.exports = server;