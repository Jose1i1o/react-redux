// checkbox x5
import { Form } from 'react-bootstrap'

const Checkbox = (props) => {
  const { field } = props

  const handleChange = (e) => {}

  return (
    <>
      <div className="mb-3">
        <Form.Check
          id={field}
          type="checkbox"
          label={field}
          value={field}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export default Checkbox
