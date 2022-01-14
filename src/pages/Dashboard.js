import React, { useEffect, useState } from 'react'
import getData from '../config/getDb'
import Dropdown from '../components/Dropdown'
import MultiRange from '../components/MultiRange'
import { Container, Form } from 'react-bootstrap'
import CheckboxFeed from '../components/Checkbox/CheckboxFeed'
import List from '../components/List'
import SearchBar from '../components/SearchBar'

const Dashboard = () => {
  const [user, setUser] = useState()
  const [properties, setProperties] = useState()
  const [favorite, setFavorite] = useState()

  useEffect(() => {
    getData.get('/users').then((res) => {
      setUser(res.data)
    })
    getData.get('/properties').then((res) => {
      setProperties(res.data)
    })
    getData.get('/favorite').then((res) => {
      setFavorite(res.data)
    })
  }, [])

  const typeOfHome = filterOptions('type')
  const condition = filterOptions('condition')
  const bedrooms = filterOptions('room')
  const bathrooms = filterOptions('bath')
  const price = filterOptions('price')

  function filterOptions(prop) {
    let newArray = []
    if (properties) {
      properties.forEach((item) => {
        if (!newArray.includes(item[prop])) {
          newArray.push(item[prop])
        }
      })
    }
    return newArray
  }

  return (
    <Container>
      <SearchBar />
      <Form>
        <CheckboxFeed label={'type Of Home'} fields={typeOfHome} />
        <CheckboxFeed label={'Condition'} fields={condition} />
        <CheckboxFeed label={'Bedrooms'} fields={bedrooms} />
        <CheckboxFeed label={'Bathrooms'} fields={bathrooms} />
        <Dropdown />
        {properties && (
          <MultiRange
            min={Math.min(...price)}
            max={Math.max(...price)}
            onChange={() => null}
          />
        )}
      </Form>
      <List />
    </Container>
  )
}

export default Dashboard
