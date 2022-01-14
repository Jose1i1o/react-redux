import Dropdown from 'react-bootstrap/Dropdown';

const DropdownFeed = (props) => {
  const { fields, label } = props;

  const handleChange = (e) => {}

  return (
    <>
      <Dropdown.Label>{label}</Dropdown.Label>
      {fields.map((field, idx) => {
        return (
          <Dropdown key={idx}>
            <Dropdown.Toggle
              label={field}
            >
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
        );
      })}
    </>
  );
};

export default DropdownFeed;
