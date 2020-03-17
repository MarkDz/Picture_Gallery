import React from 'react'
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
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  &:hover {
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`
const PageNumbers = styled.ul`
  list-style: none;
  display: flex;
  flex: wrap;
  justify-content: center;
  margin-top: 200px;
`
const Li = styled.div`
  margin-right: 0.3em;
  color: yellowgreen;
  user-select: none;
  cursor: pointer;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
`
class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      todosPerPage: 3
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }
  componentDidMount() {
    this.props.getAllPictures()
  }
  render() {
    const {currentPage, todosPerPage} = this.state
    // Logic for displaying current pictures
    const indexOfLastTodo = currentPage * todosPerPage
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage
    const currentTodos = this.props.pictures.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    )
    // Logic for displaying page numbers
    const pageNumbers = []
    for (
      let i = 1;
      i <= Math.ceil(this.props.pictures.length / todosPerPage);
      i++
    ) {
      pageNumbers.push(i)
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page-item"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      )
    })
    return (
      <div>
        <Pics>
          {currentTodos.map(picture => (
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
        <Li>
          <PageNumbers>{renderPageNumbers}</PageNumbers>
        </Li>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures
  }
}
const mapDispatchToProps = dispatch => ({
  getAllPictures: () => dispatch(getAllPicturesThunk())
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
