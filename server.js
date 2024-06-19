const express = require('express');
const { login } = require('./routes/auth-route');
const { register } = require('./routes/auth-route');

const app = express();

app.use('/login',login)
app.use('/register', register);


app.listen(8000);
