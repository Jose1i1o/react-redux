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
    dispatch(setFilter(filters)) // Guardamos filtros en estado de filtros
    console.log(filters)
    const values = Object.entries(filters)
    console.log(values);
    const query = []
    // console.log(values[0][0])
    // console.log(values[1][1])

    values.forEach((value) => {
      query.push(`${value[0]}`)
    })
    // reset query each time
    
    const response = await getData.get(`/properties?${query.join('&')}`)
    console.log(response.data)
    dispatch(filterProperties(response.data))
  }
}
//       query.push(values[0][0])
//     }
//     console.log(query);
//     // console.log(query);
//     const properties = await getData.get('/properties')
//     // console.log(properties);
//     const filtered = properties.data.filter((property) => {
//       const { street, type } = filters
//       return (
//         property.street.toLowerCase().includes(street.toLowerCase()) &&
//         property.type.toLowerCase().includes(type.toLowerCase())
//       )
//     })
//     // console.log(filtered);
//     dispatch(filterProperties(filtered))
//   }
// }
//     console.log(url);
//     const res = await getData.get(url)
//     dispatch(filterProperties(res.data))
//     dispatch(loadProperties(res.data))
//   }
// }
