import { useDispatch } from 'react-redux'
import { searchFilter } from '../redux/loadProperties/actions'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import getData from '../config/getDb'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchFilter({ street: search }))

    getData.get('/properties?room_gte=3').then((res) => {
      console.log(res.data)
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control
        name="search"
        className="mb-3"
        type="text"
        id="search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default SearchBar
