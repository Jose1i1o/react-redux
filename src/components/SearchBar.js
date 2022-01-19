import { useDispatch, useSelector } from 'react-redux'
import { setFiltered } from '../redux/loadProperties/actions'
import { Form, Button } from 'react-bootstrap'

const SearchBar = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.load)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFiltered({ ...filters, street: e.target.search.value }))
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control
        defaultValue={filters.street !== '' ? filters.street : ''}
        name="search"
        type="text"
        id="search"
      />
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default SearchBar
