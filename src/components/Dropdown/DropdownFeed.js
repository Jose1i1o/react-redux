import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownItem from './Dropdown';

const DropdownFeed = (props) => {
  const { fields, label } = props;
  

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {label}
        </Dropdown.Toggle>
        <Dropdown.Menu>
      {fields.map((field, idx) => {
        return (
          <Dropdown.Item
            value={field}
            key={idx}
          >
            {field}
          </Dropdown.Item>
        );
      })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownFeed;
