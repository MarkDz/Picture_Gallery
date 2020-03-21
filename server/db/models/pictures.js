const Sequelize = require('sequelize')
const db = require('../db')

const Pictures = db.define('pictures', {
  URL: {
    type: Sequelize.STRING,
    defaultValue: ''
  }
})

module.exports = Pictures

const fs = require('fs')

var directory = './client/uploads'

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log('Folder doesnt exist')
  }
  // 'files' is an array of the files found in the directory
})

let accessToPics = './client/uploads/BmA8B0tY.csv'

const loadDb = props => {
  fs.readFile(accessToPics, function read(err, data) {
    if (err) {
      console.log(err)
    }
    let content = data.toString().split('\n')
    let picUrls = []
    for (let i = 1; i < content.length - 1; i++) {
      let picUrl = {}
      picUrl.URL = content[i]
      picUrls.push(picUrl)
    }

    Pictures.bulkCreate(picUrls, {validate: true})
      .then(() => {
        console.log('entries created')
      })
      .catch(error => {
        console.log('failed to create entries')
        console.log(error)
      })
  })
}

//load_db()
