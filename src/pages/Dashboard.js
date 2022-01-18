import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filters/Filter'
import { setFiltered, searchFilter } from '../redux/loadProperties/actions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.load)

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
    dispatch(setFiltered())
    dispatch(searchFilter)
  }, [filters])

  return (
    <Container>
      <SearchBar />
      <Filter />
      <List />
    </Container>
  )
}

export default Dashboard
