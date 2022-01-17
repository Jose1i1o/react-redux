// actions
import { LOAD_PROPERTIES } from './types'

export const loadProperties = (value) => ({
  type: LOAD_PROPERTIES,
  payload: value,
})
