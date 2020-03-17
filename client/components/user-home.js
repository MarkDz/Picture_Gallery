import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getAllPicturesThunk} from '../store/picture'

/**
 * COMPONENT
 */
// This component will be used in the next version
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>pictures</div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}
const mapDispatchToProps = dispatch => ({
  getAllPictures: () => dispatch(getAllPicturesThunk())
})

export default connect(mapState, mapDispatchToProps)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
