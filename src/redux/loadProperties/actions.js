import getData from '../../config/getDb'
import { LOAD_PROPERTIES, SET_FILTER, FILTER_PROPERTIES } from './types'
import { useSelector } from 'react-redux'

export const loadProperties = (value) => {
  return { type: LOAD_PROPERTIES, payload: value }
}

export const setFilter = (value) => {
  return { type: SET_FILTER, payload: value }
}

export const filterProperties = (value) => ({
  type: FILTER_PROPERTIES,
  payload: value,
})

export const setFiltered = (filters) => {
  return async (dispatch) => {
    dispatch(setFilter(filters)) // Guardamos filtros en estado de filtros
    console.log(filters)
    const values = Object.entries(filters)
    const query = []

    values.forEach((value) => {
      switch (value[0]) {
        case 'street':
          query.push(`street_like=${value[1]}`)
        case 'type':
          query.push(`type=${value[1][0]}`)
        default:
          break
      }
    })
    const concatQuery = query.join('&')

    const properties = await getData
      .get(`/properties?${concatQuery}`)
      .then((res) => res.data) // Hacemos peticion JSON Server con nuestros filtros
    dispatch(loadProperties(properties)) // Guardamos en el estado los datos del JSON Server
  }
}
