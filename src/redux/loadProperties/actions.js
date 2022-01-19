import getData from '../../config/getDb'
import { LOAD_PROPERTIES, SET_FILTER, FILTER_PROPERTIES } from './types'

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
    dispatch(setFilter(filters))
    const values = Object.entries(filters)
    const query = []

    values.forEach((value) => {
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
            if (el[1] === true) {
              if (el[0].includes('+')) {
                const maxRoom = el[0].split('+')[0]
                return query.push(`room_gte=${maxRoom}`)
              }
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
            if (el[1] === true) {
              if (el[0].includes('+')) {
                const maxBathRoom = el[0].split('+')[0]
                return query.push(`bath_gte=${maxBathRoom}`)
              }

              arr4.push(el[0])
            }
          })
          if (arr4.length > 0) {
            const res4 = arr4.join('&bath=')

            query.push(`bath=${res4}`)
          }
          break

        case 'publication_date':
          const date = new Date()
          if (value[1] === 'null') return

          date.setDate(date.getDate() - value[1])

          const handleDate = date
            .toISOString()
            .split('.')[0]
            .split('T')
            .join(' ')
          query.push(`publication_date_gte=${handleDate}`)
          break

        case 'more_filters':
          let filtering5 = Object.entries(value[1])
          let arr5 = []
          filtering5.forEach((el) => {
            if (el[1] === true) {
              arr5.push(el.join('='))
            }
          })
          if (arr5.length > 0) {
            const res5 = arr5.join('&')
            query.push(res5)
          }
          break

        case 'equipment':
          if (value[1] === 'indifferent') {
            return
          }
          let arr6 = []
          arr6.push(value.join('='))

          query.push(arr6)

          break

        case 'min_price':
          if (value[1] !== '') query.push(`price_gte=${value[1]}`)
          break
        case 'max_price':
          if (value[1] !== '') query.push(`price_lte=${value[1]}`)
          break
        default:
          break
      }
    })
    const concatQuery = query.join('&')

    const properties = await getData
      .get(`/properties?${concatQuery}`)
      .then((res) => res.data)
    dispatch(loadProperties(properties))
  }
}
