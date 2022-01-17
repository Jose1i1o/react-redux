import React, { useEffect, useState } from 'react'
import getData from '../config/getDb'
import { Container } from 'react-bootstrap'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import { useDispatch } from 'react-redux'
import { loadProperties } from '../redux/loadProperties/actions'
import Filter from '../components/Filters/Filter'

const Dashboard = () => {
  const [user, setUser] = useState()
  const [properties, setProperties] = useState()
  const [favorite, setFavorite] = useState()
  const dispatch = useDispatch()

  // json filters = {
  //   type:["flat",...],
  //   condition:["new",...],
  //   bed:[1,2,...],
  //   bath:[1,2,...],
  //   more_filters:["new",...],
  //   equipment:"furnished/unfurnished",
  //   publication_date:"today/last week",
  //   max_price:10000,
  //   max_price:100000
  // }

  useEffect(() => {
    getData.get('/users').then((res) => {
      setUser(res.data)
    })
    getData.get('/properties').then((res) => {
      setProperties(res.data)
      dispatch(loadProperties(res.data))
    })
    getData.get('/favorite').then((res) => {
      setFavorite(res.data)
    })
  }, [])

  return (
    <Container>
      <SearchBar />
      <Filter />
      <List />
    </Container>
  )
}

export default Dashboard
