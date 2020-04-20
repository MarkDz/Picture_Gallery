import React from 'react'
import {Navbar, singlePicture} from './components'
import Routes from './routes'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <singlePicture />
      <Routes />
    </React.Fragment>
  )
}
export default App
