const express = require('express');
const { getHomepage, getAbc, getView, postCreateuser } = require('../controllers/homeController')

const router = express.Router();
//khai bao route
router.get('/', getHomepage)

router.get('/abc', getAbc)

router.get('/view', getView)

router.post('/create', postCreateuser)

module.exports = router;