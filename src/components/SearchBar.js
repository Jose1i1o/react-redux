import { Form } from 'react-bootstrap'

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control name="search" className="mb-3" type="text" id="search" />
    </Form>
  )
}

export default SearchBar
