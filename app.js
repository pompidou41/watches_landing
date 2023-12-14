require('@babel/register');

const express = require('express');

const config = require('./config/serverConfig');
const indexRoutes = require('./routes/index.routes');

const app = express();
const PORT = 3000;

config(app);

app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Пашем на  ${PORT} порту`);
});
