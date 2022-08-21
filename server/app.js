const express = require('express');
const bodyparser = require('body-parser');

const customerRoutes = require('./routes/customer-routes')

const app = express();
app.use('/customer', customerRoutes);

app.listen(5000, () => {
    console.log('server started')
})