import { LOAD_PROPERTIES, SEARCH_FILTER, FILTER_PROPERTIES } from './types'
import { initialState, INITIAL_FILTER_STATE } from './state'

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
      const filtered = action.payload.filter((res) =>
        res.street.includes(state.filters)
      )

      return {
        ...state,
        properties: filtered,
      }
    default: {
      return state
    }
  }
}

const FilterReducer = (state = INITIAL_FILTER_STATE, action) => {
  switch (action.type) {
    case FILTER_PROPERTIES:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export { reducer, FilterReducer }
