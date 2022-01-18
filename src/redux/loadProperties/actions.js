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
          if (value[1].length > 0) query.push(`street_like=${value[1]}`)
          break
        case 'type':
          let filtering1 = Object.entries(value[1])
          let arr1 = []
          filtering1.forEach((el) => {
            if (el[1] === true) {
              arr1.push(el[0])
            }
          })
          if (arr1.length > 0) {
            const res1 = arr1.join('&type=')
            query.push(`type=${res1}`)
          }
          break

        case 'condition':
          let filtering2 = Object.entries(value[1])
          let arr2 = []
          filtering2.forEach((el) => {
            if (el[1] === true) {
              arr2.push(el[0])
            }
          })
          if (arr2.length > 0) {
            const res2 = arr2.join('&condition=')
            query.push(`condition=${res2}`)
          }
          break

        case 'room':
          let filtering3 = Object.entries(value[1])
          let arr3 = []
          filtering3.forEach((el) => {
            console.log(el)

            if (el[1] === true) {
              arr3.push(el[0])
            }
          })
          if (arr3.length > 0) {
            const res3 = arr3.join('&room=')

            query.push(`room=${res3}`)
          }
          break

        case 'bath':
          let filtering4 = Object.entries(value[1])
          let arr4 = []
          filtering4.forEach((el) => {
            console.log(el)

            if (el[1] === true) {
              arr4.push(el[0])
            }
          })
          if (arr4.length > 0) {
            const res4 = arr4.join('&bath=')

            query.push(`bath=${res4}`)
          }
          break

        case 'price':
          console.log(value)
          // if (arr4.length > 0) {
          //   const res4 = arr4.join('&bath=')

          //   query.push(`bath=${res4}`)
          // }
          break
        default:
          break
      }
    })
    // console.log(query)
    console.log(query)
    const concatQuery = query.join('&')

    console.log(concatQuery)

    const properties = await getData
      .get(`/properties?${concatQuery}`)
      .then((res) => res.data) // Hacemos peticion JSON Server con nuestros filtros
    dispatch(loadProperties(properties)) // Guardamos en el estado los datos del JSON Server
  }
}
