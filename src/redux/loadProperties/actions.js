import getData from '../../config/getDb'
import { LOAD_PROPERTIES, SEARCH_FILTER, FILTER_PROPERTIES } from './types'

export const loadProperties = (value) => {
  return { type: LOAD_PROPERTIES, payload: value }
}

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
    dispatch(searchFilter) // Guardamos filtros en estado de filtros
    const properties = await getData.get('/properties').then((res) => res.data) // Hacemos peticion JSON Server con nuestros filtros
    dispatch(filterProperties(properties)) // Guardamos en el estado los datos del JSON Server
  }
}
