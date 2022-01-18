import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/loadProperties/actions'
import { Form, Button } from 'react-bootstrap'
import getData from '../config/getDb'

const SearchBar = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setFilter({ street: e.target.search.value }))

    getData.get('/properties?room_gte=3').then((res) => {
      // console.log(res.data)
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control name="search" className="mb-3" type="text" id="search" />
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default SearchBar
