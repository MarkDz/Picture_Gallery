const router = require('express').Router()
const fileUpload = require('express-fileupload')

module.exports = router
router.use(fileUpload())

router.post('/', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({msg: 'No File Uploaded'})
  }

  const file = req.files.file

  file.mv(`${__dirname}/../../client/uploads/${file.name}`, err => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    res.json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })
})
