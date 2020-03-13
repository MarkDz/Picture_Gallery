const router = require('express').Router()
const {Pictures} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pictures = await Pictures.findAll({attributes: ['id', 'url']})
    res.send(pictures)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {url, name} = req.body
    const newPictures = await Pictures.create({
      url,
      name
    })
    if (newPictures) res.send(newPictures)
    else res.status(404).send(`404 - Can't Add New Pictures`)
  } catch (err) {
    next(err)
  }
})
