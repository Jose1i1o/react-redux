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

    // {filters: {street:''}, {flat:''}
    // case FILTER_PROPERTIES:
    //   const filtered = action.payload.filter((prop) => {
    //     return prop.street.includes(state.filters.street)
    //   })
    //   return {
    //     ...state,
    //     properties: filtered,
    //   }
    default: {
      return state
    }
  }
}

export default reducer
