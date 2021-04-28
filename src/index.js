//server

const express = require('express');

const productsRoutes = require('./routes/products');

const app = express();

const ports = process.env.PORT || 3000;

app.use('/products', productsRoutes);

app.listen(ports, () => {
    console.log(`listening on port ${ports}`);
});
