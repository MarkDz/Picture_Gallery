const router = require('express').Router()
module.exports = router

//router.use('/users', require('./users'))
router.use('/pictures', require('./pictures'))
router.use('/upload', require('./upload'))

// router.use((req, res, next) => {
//   const error = new Error('Not Found sorry')
//   error.status = 404
//   next(error)
// })
