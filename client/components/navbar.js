import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import FileUpload from './fileUpload'
import styled from 'styled-components'

const Button = styled.div`
  background: 'white';
  font-size: 1em;
  margin: 1em;
  padding: 0.2em 0.5em;
  border: 2px solid palevioletred;
  border-radius: 7px;
`

const LinkButtonsGroup = styled.div`
  display: flex;
  flex: wrap;
  align-items: left;
  justify-content: left;
  background-color: white;
`

const Title = styled.div`
  color: white;
  margin: 10px;
`

const Navbar = ({handleClick, isLoggedIn}) => {
  return (
    <div>
      <div>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}

            <LinkButtonsGroup>
              <Title>
                <h1>My Dashboard</h1>
              </Title>
              <FileUpload />
              <Button>
                <Link to="/home">Home</Link>
              </Button>
              <Button>
                <Link to="/paginated">My Pictures</Link>
              </Button>
              <Button>
                <a href="#" onClick={handleClick}>
                  Logout
                </a>
              </Button>
            </LinkButtonsGroup>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <LinkButtonsGroup>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </LinkButtonsGroup>
          </div>
        )}
      </div>
      <hr />
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
