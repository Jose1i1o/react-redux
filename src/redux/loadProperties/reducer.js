import { LOAD_PROPERTIES, SEARCH_FILTER, FILTER_PROPERTIES } from './types'
import initialState from './state'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return { ...state, properties: action.payload }

    case SEARCH_FILTER:
      const filtered = action.payload.filter((res) =>
        res.street.includes(state.filters)
      )
      return {
        ...state,
        filters: action.payload,
        properties: filtered,
      }
    case FILTER_PROPERTIES:
      // const filtered = action.payload.filter((res) =>
      //   res.street.includes(state.filters)
      // )
      // console.log(filtered)

      return {
        ...state,
        properties: filtered,
      }
    default: {
      return state
    }
  }
}

export default reducer
