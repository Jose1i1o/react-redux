import getData from '../../config/getDb'
import { LOAD_PROPERTIES, SEARCH_FILTER, FILTER_PROPERTIES } from './types'

export const loadProperties = (value) => ({
  type: LOAD_PROPERTIES,
  payload: value,
})

export const searchFilter = (value) => ({
  type: SEARCH_FILTER,
  payload: value,
})

export const filterProperties = (value) => ({
  type: FILTER_PROPERTIES,
  payload: value,
})

export const setFiltered = () => {
  return async (dispatch) => {
    dispatch(searchFilter)
    const properties = await getData.get('/properties').then((res) => res.data)
    dispatch(filterProperties(properties))
  }
}
