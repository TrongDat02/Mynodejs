const express = require('express');
const path = require('path');

require('dotenv').config()


const configViewEngine = require('./src/config/viewEngine')

const webRoutes = require('./src/routes/web.js')

const app = express()// app express
const port = process.env.PORT || 8888//hardcode
const hostname = process.env.HOST_NAME

configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})