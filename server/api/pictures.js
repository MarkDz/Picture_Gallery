const router = require('express').Router()
const {Pictures} = require('../db/models')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const pictures = await Pictures.findAll({attributes: ['id', 'URL']})
    res.send(pictures)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const singlePicture = await Pictures.findById(req.params.id)
    if (singlePicture) res.send(singlePicture)
    else res.status(404).send('404 - This picture does not exist')
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {URL, name} = req.body

    const newPictures = await Pictures.create({
      URL,
      name
    })
    if (newPictures) res.send(newPictures)
    else res.status(404).send(`404 - Can't Add New Pictures`)
  } catch (err) {
    next(err)
  }
})
