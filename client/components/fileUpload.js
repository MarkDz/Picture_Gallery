import React, {Fragment, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const UploadComponent = styled.div`
  border: 2px solid black;
  border-radius: 7px;
  color: yellowgreen;
`

const FileUpload = () => {
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('File Name')
  const [setUploadedFile] = useState({})

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
      <UploadComponent>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleChange} />
          <label htmlFor="customFile">{filename}</label>
          <input type="submit" value="Upload" />
        </form>
      </UploadComponent>
    </Fragment>
  )
}
export default FileUpload
