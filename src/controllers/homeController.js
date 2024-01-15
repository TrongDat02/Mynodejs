const getHomepage = (req, res) => {
    res.send('Hello World!')
}


const getAbc = (req, res) => {
    res.send('Hello World! toi la dat')
}

const getView = (req, res) => {
    //res.send('Hello World! toi la dat')
    res.render('vidu.ejs')
}

module.exports = {
    getHomepage, getAbc, getView
}