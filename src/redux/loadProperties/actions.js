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
  // console.log(filters)
  return async (dispatch) => {
    dispatch(setFilter(filters)) // Guardamos filtros en estado de filtros
    const values = Object.entries(filters)
    const query = []

    values.forEach((value) => {
      // console.log(value)

      switch (value[0]) {
        case 'street':
          query.push(`street_like=${value[1]}`)
          break
        case 'type':
          const filtering = Object.entries(value[1])
          let arr = []
          filtering.forEach((el) => {
            if (el[1] === true) {
              arr.push(el[0])
            }
          })
          console.log(arr)

          query.push(`type=${arr[0]}`)
        default:
          break
      }
    })
    // console.log(query)
    const concatQuery = query.join('&')

    const properties = await getData
      .get(`/properties?${concatQuery}`)
      .then((res) => res.data) // Hacemos peticion JSON Server con nuestros filtros
    dispatch(loadProperties(properties)) // Guardamos en el estado los datos del JSON Server
  }
}
