const router = require('express').Router()
module.exports = router

// This is just to organize routes more usefull in bigger projects

router.use('/pictures', require('./pictures'))
router.use('/upload', require('./upload'))
router.use('./users', require('./users'))
