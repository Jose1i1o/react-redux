import { Form } from 'react-bootstrap'
import Checkbox from './Checkbox'

const CheckboxFeed = (props) => {
  const { fields, label } = props

  return (
    <>
      <Form.Label>{label}</Form.Label>
      {fields.map((field, idx) => {
        return (
          <Checkbox className="mb-3" key={idx} label={label} field={field} />
        )
      })}
    </>
  )
}

export default CheckboxFeed
