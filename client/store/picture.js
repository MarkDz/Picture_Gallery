import axios from 'axios'

// ACTION TYPES

const GET_ALL_PICTURES = 'GET_ALL_PICTURES'
const GET_SINGLE_PICTURE = 'GET_SINGLE_PICTURE'

// INITIAL STATE

const defaultPictures = []

// ACTION CREATORS

const getAllPictures = pictures => ({
  type: GET_ALL_PICTURES,
  pictures
})

const SinglePicture = picture => ({type: GET_SINGLE_PICTURE, picture})

// THUNK CREATORS

export const getAllPicturesThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/pictures')
    dispatch(getAllPictures(data))
  } catch (error) {
    console.error(
      'there was a problem in the getAllPicturesThunk ----->',
      error
    )
  }
}

export const getSinglePictureThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/pictures/${id}`)
    dispatch(SinglePicture(data))
  } catch (err) {
    console.log('Error', err)
  }
}

export const pictures = (state = defaultPictures, action) => {
  switch (action.type) {
    case GET_ALL_PICTURES:
      return action.pictures
    default:
      return state
  }
}

export const picture = (singlePictureState = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PICTURE:
      return action.picture
    default:
      return singlePictureState
  }
}
