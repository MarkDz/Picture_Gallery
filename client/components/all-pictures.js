import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllPicturesThunk} from '../store/picture'
import styled from 'styled-components'

const Pics = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const Pic = styled.div`
  padding: 15px;
  margin: 10px;
  box-shadow: 0 0 0.625rem 0.2rem #555;
  transition: filter 0.5s ease-in-out;
  -webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(0%); /* FF 35+ */
  &:hover {
    -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
    filter: grayscale(100%); /* FF 35+ */
  }
`
// This class component renders all the pictures available from database
class AllPictures extends Component {
  componentDidMount() {
    this.props.getAllPictures()
  }
  render() {
    return (
      <Pics>
        {this.props.pictures.map(picture => (
          <span key={picture.id}>
            <div id={picture.id}>
              <br />
              <Pic>
                <img src={picture.URL} />
              </Pic>
              <br />
            </div>
            <br />
          </span>
        ))}
      </Pics>
    )
  }
}

// Functions that connects this components with Redux
const mapStateToProps = state => {
  return {
    pictures: state.pictures
  }
}
const mapDispatchToProps = dispatch => ({
  getAllPictures: () => dispatch(getAllPicturesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllPictures)
