import { Button, Form } from 'react-bootstrap'

const SearchBar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex mb-3">
      <Form.Control name="search" type="text" id="search" />
      <Button type="submit">Send</Button>
    </Form>
  )
}

export default SearchBar
