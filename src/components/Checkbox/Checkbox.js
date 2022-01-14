// checkbox x5
import { Form } from "react-bootstrap";

const Checkbox = (props) => {
  const { field } = props;
  console.log(field);

  const handleChange = (e) => {
    if (e.target.checked) console.log(e.target.value);
  };

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
  );
};

export default Checkbox;
