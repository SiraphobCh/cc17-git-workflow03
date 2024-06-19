const express = require('express');
const { register } = require('./routes/auth-route');

const app = express();

app.use('/register', register);

app.listen(8000);
