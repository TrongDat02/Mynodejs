const getHomepage = (req, res) => {
    return res.render('home.ejs')
}


const getAbc = (req, res) => {
    res.send('Hello World! toi la dat')
}

const getView = (req, res) => {
    //res.send('Hello World! toi la dat')
    res.render('vidu.ejs')
}

const postCreateuser = (req, res) => {
    res.send('Hello World! toi la dat')
}

module.exports = {
    getHomepage, getAbc, getView, postCreateuser
}