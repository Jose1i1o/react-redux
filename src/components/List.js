import { useSelector } from 'react-redux'
import { Container, ListGroup } from 'react-bootstrap'

const List = () => {
  // const flat = ['sevilla', 'cartuja', 'país vasco', 'granda']
  // const bedroom = [1, 2, 3, 4]
  // const bathroom = [1, 2, 2, 1]
  // const equiped = ['yes', 'no', 'no', 'yes']

  const { properties } = useSelector((state) => state.load)
  const flat = properties

  return (
    <Container>
      <ListGroup>
        {flat.length > 0 &&
          flat.map((item) => {
            return (
              <ListGroup.Item key={item.id}>
                <span>Address: {item.street} </span>
                <span>Rooms: {item.room} </span>
                <span>Bath: {item.bath} </span>
                <span>Price: {item.price}€ </span>
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </Container>
  )
}

export default List
