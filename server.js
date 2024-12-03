const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const updateStatusCron = require('./cron/updateStatus');

const app = express();


app.use(bodyParser.json());


app.use(menuRoutes);
app.use(orderRoutes);


updateStatusCron;


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
