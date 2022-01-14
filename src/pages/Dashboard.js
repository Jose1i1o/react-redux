import MultiRange from '../components/MultiRange'
import { Container, Form } from 'react-bootstrap'
import CheckboxFeed from '../components/Checkbox/CheckboxFeed'
import List from '../components/List'
import DropdownFeed from '../components/Dropdown/DropdownFeed'

const Dashboard = () => {
  const typeOfHome = ['new', 'old']
  const condition = ['Good Condition', 'Needs renovation']
  const bedrooms = ['1', '2', '3']
  const bathrooms = ['1', '2']
  const moreFilters = ['Lift', 'Garden']
  const equipment = ['Furnished', 'Unfurnished', 'Indifferent']
  const datePublication = ['Today', 'Last week', 'Last month']

  return (
    <Container>
      <Form>
        <CheckboxFeed label={'Type of home'} fields={typeOfHome} />
        <CheckboxFeed label={'Condition'} fields={condition} />
        <CheckboxFeed label={'Bedrooms'} fields={bedrooms} />
        <CheckboxFeed label={'Bathrooms'} fields={bathrooms} />
        <CheckboxFeed label={'More filters'} fields={moreFilters} />
        <DropdownFeed label={'Equipment'} fields={equipment} />
        <DropdownFeed label={'Dropdown Date'} fields={datePublication} />
        <MultiRange min={0} max={1000} onChange={({ min, max }) => null} />
      </Form>
      <List />
    </Container>
  )
}

export default Dashboard
