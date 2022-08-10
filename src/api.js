const express = require('express');

// const { User } = require('./database/models');

const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');

const validateLogin = require('./middleware/validateLogin');

// ...

const app = express();
app.use(express.json());

app.use('/login', validateLogin, loginRouter);
app.use('/users', userRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
