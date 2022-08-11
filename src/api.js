const express = require('express');

// const { User } = require('./database/models');

const userRouter = require('./routes/user.router');
const loginRouter = require('./routes/login.router');
const categoriesRouter = require('./routes/categories.router');

const validateLogin = require('./middleware/validateLogin');

// ...

const app = express();
app.use(express.json());

app.use('/login', validateLogin, loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoriesRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
