import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../redux/loadProperties/actions'
import { Form, Button } from 'react-bootstrap'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchFilter(result))
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control
        name="search"
        className="mb-3"
        type="text"
        id="search"
        onChange={(e) => setResult(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default SearchBar
