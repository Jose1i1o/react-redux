import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import Range from "../components/Range";
import List from "../components/List";
import { Container } from "react-bootstrap";


const Dashboard = () => {
    return (
        <Container>
          <Checkbox />
          <Dropdown />
          <Range />
          <List />
        </Container>
      );
}

export default Dashboard;