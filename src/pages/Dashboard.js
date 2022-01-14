import Dropdown from "../components/Dropdown";
import Range from "../components/Range";
import { Container, Form } from "react-bootstrap";
import CheckboxFeed from "../components/Checkbox/CheckboxFeed";

const Dashboard = () => {
  const typeOfHome = ["new", "old"];
  const condition = ["Good Condition", "Needs renovation"];
  const bedrooms = ["1", "2", "3"];
  const bathrooms = ["1", "2"];
  const moreFilters = ["Lift", "Garden"];

  return (
    <Container>
      <Form>
        <CheckboxFeed label={"Type of home"} fields={typeOfHome} />
        <CheckboxFeed label={"Condition"} fields={condition} />
        <CheckboxFeed label={"Bedrooms"} fields={bedrooms} />
        <CheckboxFeed label={"Bathrooms"} fields={bathrooms} />
        <CheckboxFeed label={"More filters"} fields={moreFilters} />
        <Dropdown />
        <Range />
      </Form>
    </Container>
  );
};

export default Dashboard;
