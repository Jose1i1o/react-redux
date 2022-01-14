import Dropdown from '../components/Dropdown'
import Checkbox from '../components/Checkbox'
import MultiRange from '../components/MultiRange'
import { Container } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <Container>
      <Checkbox />
      <Dropdown />
      <MultiRange
        min={0}
        max={1000}
        onChange={({ min, max }) => console.log(`min= ${min}, max=${max}`)}
      />
    </Container>
  )
}

export default Dashboard
