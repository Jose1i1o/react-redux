// reducer
import { LOAD_PROPERTIES } from './types'
import initialState from './state'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES:
      return { ...state, properties: action.payload }
    default: {
      return state
    }
  }
}

export default reducer
