// Dropdown x2

import { Dropdown } from 'react-bootstrap'

const DropdownItem = (props) => {
  const { field } = props

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
            value={field}
            onChange={handleChange}
        >
        </Dropdown.Item>
        <Dropdown.Item
            value={field}
            onChange={handleChange}
        >
        </Dropdown.Item>
        <Dropdown.Item
            value={field}
            onChange={handleChange}
        >
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownItem
