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
          query.push(`street_like=${value[1]}`);
          break;
        case 'type':
          query.push(`type_like=${value[1]}`);
          break;
        default:
          break;
      }
    })

    const url = `/properties?${query.join('&')}`
    const res = await getData.get(url)
    dispatch(loadProperties(res.data))
  }
}
