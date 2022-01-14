import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import Range from "../components/Range";
import { Container } from "react-bootstrap";


const Dashboard = () => {
    return (
        <Container>
          <Checkbox />
          <Dropdown />
          <Range />
        </Container>
      );
}

export default Dashboard;