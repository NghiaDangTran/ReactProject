import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const initialState = {
  isLoading: false,
  Stories: [],
  Page: 1,
  MaxPage: 50
  ,
  Search: "react"
}
const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return {
      ...state, isLoading: !state.isLoading
    }


  }
  if (action.type === SET_STORIES) {
    const { hits, nbPages } = action.payload
    return {
      ...state, Stories: hits, MaxPage: nbPages
    }

  }
  if (action.type === HANDLE_SEARCH) {

    return {
      ...state, Search: action.payload, Page: 1
    }

  }
  if (action.type === HANDLE_PAGE) {

    const val = action.payload
    let result = 1;
    if (state.Page + val < 1)
      result = state.MaxPage - 1
    else if (state.Page + val > state.MaxPage - 1)
      result = 0
    else result = state.Page + val

    return {
      ...state, Page: result
    }

  }
  if (action.type === REMOVE_STORY) {
    const newData = state.Stories.filter((i, index) => {
      return index !== action.payload

    })
    return {
      ...state, Stories: newData
    }

  }

  throw new Error('no matching action type')

}
export default reducer
