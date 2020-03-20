import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import FileUpload from './fileUpload'
//import styled from 'styled-components'

// const Button = styled.div`
//   background: 'white';
//   font-size: 1em;
//   margin: 0.5em;
//   margin-top: 30px;
//   padding: 0.5em 0.5em;
//   font-family: Consolas, monaco, monospace;
// `
// const LinkButtonsGroup = styled.div`
//   display: flex;
//   flex: wrap;
//   align-items: left;
//   justify-content: left;
//   background-color: white;
// `
// const Title = styled.div`
//   color: rebeccapurple;
//   margin: 10px;
//   font-family: Consolas, monaco, monospace;
// `

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <div>
      <div>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <h1>My Dashboard</h1>
            <FileUpload />
            <Link to="/home">Home</Link>
            <Link to="/paginated">My Pictures</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            {/* <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
