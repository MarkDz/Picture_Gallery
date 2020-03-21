import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import FileUpload from './fileUpload'
import styled from 'styled-components'

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const Title = styled.div`
  text-decoration: none;
  color: goldenrod;
  margin-top: 28px;
  padding: 10px;
  margin: 10 3vw;

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  justify-content: center;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 1vh;

  padding: 0 2vw;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? '-100%' : '0')};
  }
`
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? '0' : '1')};
    transform: ${props => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`
const Navbar = ({handleClick, isLoggedIn}) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <div>
      {isLoggedIn ? (
        <Navigation>
          <FileUpload />
          {/* <Title>My Dash</Title> */}
          <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? <Hamburger open /> : <Hamburger />}
          </Toggle>
          {navbarOpen ? (
            <Navbox>
              <NavItem to="/home">Home</NavItem>
              <NavItem to="/paginated">My Pictures</NavItem>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </Navbox>
          ) : (
            <Navbox open>
              <NavItem to="/home">Home</NavItem>
              <NavItem to="/paginated">My Pictures</NavItem>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </Navbox>
          )}
        </Navigation>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link>
            <br/>
            <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
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
