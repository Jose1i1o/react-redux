import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchFilter } from '../redux/loadProperties/actions'
import { Form } from 'react-bootstrap'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(searchFilter(result))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        name="search"
        className="mb-3"
        type="text"
        id="search"
        onChange={(e) => setResult(e.target.value)}
      />
      <button>Submit</button>
    </Form>
  )
}

export default SearchBar
