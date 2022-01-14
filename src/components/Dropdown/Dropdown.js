// Dropdown x2

import Dropdown from 'react-bootstrap/Dropdown';

const DropdownItem = (props) => {
  const { field } = props

  const handleChange = (e) => {}

  return (
      <Dropdown>
        <Dropdown.Toggle
          label={field}
        >
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item 
            onChange={handleChange}
            value={field}
          >
          </Dropdown.Item>
          <Dropdown.Item
            onChange={handleChange}
            value={field}
          >
          </Dropdown.Item>
          <Dropdown.Item
            onChange={handleChange}
            value={field}
          >
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default DropdownItem