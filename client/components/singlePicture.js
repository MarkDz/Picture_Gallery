import React from 'react'
import {connect} from 'react-redux'
import {getSinglePictureThunk} from '../store/picture'

class SinglePicture extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id
    }
  }
  componentDidMount() {
    this.props.selectPicture(this.state.id)
  }
  render() {
    const singlePicture = this.props.picture
    return (
      <div>
        <img src={singlePicture.URL} height="200" width="200" />
      </div>
    )
  }
}

const mapStateToProps = state => ({picture: state.picture})
const mapDispatchToProps = dispatch => {
  return {
    selectCampus: id => dispatch(getSinglePictureThunk(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePicture)
