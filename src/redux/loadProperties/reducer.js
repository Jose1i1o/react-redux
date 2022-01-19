import { LOAD_PROPERTIES, SET_FILTER, FILTER_PROPERTIES } from './types'
import initialState from './state'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return { ...state, properties: action.payload }

    case SET_FILTER:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload },
      }
    case FILTER_PROPERTIES:
      return {
        ...state,
        properties: state.properties.filter((property) => {
          const { street, type } = state.filters
          return (
            property.street.includes(street.toLowerCase()) &&
            property.type.includes(type.toLowerCase())
          )
        }),
      }
    default: {
      return state
    }
  }
}

export default reducer
