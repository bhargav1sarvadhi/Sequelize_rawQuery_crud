const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const port = process.env.PORT_SERVER || 3000;
const errorHandler = require('./middleware/errorHandler')
app.use(express.urlencoded({ extended: true }));



app.use('/', require('./routes/index'));
app.listen(port, () => { console.log('server listening on port : ' + port) });
app.use(errorHandler);