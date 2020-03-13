import axios from 'axios'

// ACTION TYPES

const GET_ALL_PICTURES = 'GET_ALL_PICTURES'

// INITIAL STATE

const defaultPictures = []

// ACTION CREATORS

const getAllPictures = pictures => ({
  type: GET_ALL_PICTURES,
  pictures
})

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

export const pictures = (state = defaultPictures, action) => {
  switch (action.type) {
    case GET_ALL_PICTURES:
      return action.pictures
    default:
      return state
  }
}
