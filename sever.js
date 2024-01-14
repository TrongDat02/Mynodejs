const express = require('express')
const app = express()// app express
const port = 8080

//config template engine
app.set('views', './src/views/')
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('Hello World! toi la dat')
})

app.get('/view', (req, res) => {
    //res.send('Hello World! toi la dat')
    res.render('vidu.ejs')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})