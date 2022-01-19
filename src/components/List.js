import { useSelector } from 'react-redux'
import { Container, ListGroup } from 'react-bootstrap'

const List = () => {
  const { properties } = useSelector((state) => state.load)
  const flat = properties

  return (
    <Container>
      <ListGroup>
        {flat &&
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
