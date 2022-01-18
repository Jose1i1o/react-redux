import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filters/Filter'
import { setFiltered, } from '../redux/loadProperties/actions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.load)

  useEffect(() => {
    if( filters && filters.length > 0 && dispatch(setFiltered(filters))) {
      console.log(filters)
    }
  }, [dispatch, filters])

  return (
    <Container className="mt-4">
      <SearchBar />
      <Filter />
      <List />
    </Container>
  )
}

export default Dashboard
