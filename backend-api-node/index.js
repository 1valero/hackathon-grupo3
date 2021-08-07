'use strict'

const express = require('express');
const app = express();
const route = require('./src/routes/index');
// const setting = require('./configs/config').environment();

const PORT = 8080;//setting.PORT;

app.set('port', PORT);
app.use('/', route);


app.listen(app.get('port'), () => {
    console.log(`Example app listening at http://localhost:${app.get('port')}`)
})