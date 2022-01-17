// actions
import { LOAD_PROPERTIES, SET_FILTER } from './types'

export const loadProperties = (value) => ({
  type: LOAD_PROPERTIES,
  payload: value,
})

export const setFilter = (value) => ({
  type: SET_FILTER,
  payload: value,
})
