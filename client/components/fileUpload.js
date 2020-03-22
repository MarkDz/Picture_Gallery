import React, {Fragment, useState} from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {
  createMuiTheme,
  makeStyles,
  MuiThemeProvider
} from '@material-ui/core/styles'

const themes = createMuiTheme({
  palette: {
    primary: {
      main: '#212121'
    },
    secondary: {
      light: '#81c784',
      main: '#81c784',
      contrastText: '#ffcc00'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})

const FileUpload = () => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [setUploadedFile] = useState({})

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    input: {
      display: 'none'
    },
    primary: {
      main: '#ff4450'
    }
  }))

  const classes = useStyles()

  const handleChange = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      const {fileName, filePath} = res.data

      setUploadedFile({fileName, filePath})
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server')
      } else {
        console.log(err.response.data.msg)
      }
    }
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <label htmlFor="contained-button-file">
            <MuiThemeProvider theme={themes}>
              <Button variant="outlined" color="primary" component="span">
                {filename}
              </Button>
            </MuiThemeProvider>
          </label>
          <input
            type="submit"
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </form>
      </div>
    </Fragment>
  )
}
export default FileUpload
