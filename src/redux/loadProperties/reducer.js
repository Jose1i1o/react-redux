import { LOAD_PROPERTIES, SEARCH_FILTER, FILTER_PROPERTIES } from './types'
import initialState from './state'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return { ...state, properties: action.payload }

    case SEARCH_FILTER:
      return {
        ...state,
        filters: action.payload,
      }
    case FILTER_PROPERTIES:
      const filtered = action.payload.filter((prop) => {
        return prop.street.includes(state.filters.street)
      })
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
