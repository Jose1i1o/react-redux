import React, { useEffect } from 'react'

import { Container } from 'react-bootstrap'
import List from '../components/List'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filters/Filter'

const Dashboard = () => {
  return (
    <Container>
      <SearchBar />
      <Filter />
      <List />
    </Container>
  )
}

export default Dashboard
