import { LOAD_PROPERTIES, SET_FILTER } from './types'
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
    default: {
      return state
    }
  }
}

export default reducer
