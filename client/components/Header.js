import React from 'react'
import GuestView from './globals/GuestView'
//import {Login, Signup} from './auth-form'
//import AuthForm from './auth-form'
import Globals from './globals/GlobalStyles'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Globals />
      <GuestView>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </GuestView>
    </div>
  )
}

export default Header
