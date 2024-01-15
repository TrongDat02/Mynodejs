const express = require('express');
const { getHomepage, getAbc, getView } = require('../controllers/homeController')

const router = express.Router();
//khai bao route
router.get('/', getHomepage)

router.get('/abc', getAbc)

router.get('/view', getView)

module.exports = router;