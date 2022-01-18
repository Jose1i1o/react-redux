import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filters/Filter'
import { loadProperties } from '../redux/loadProperties/actions'
import getData from '../config/getDb'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { filters, properties } = useSelector((state) => state.load)

  useEffect(() => {
    getData.get('/properties').then((res) => {
      dispatch(loadProperties(res.data))
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
