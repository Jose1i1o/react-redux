import { useSelector } from 'react-redux'
import { Container, ListGroup } from 'react-bootstrap'
import { useEffect } from 'react'

const List = () => {
  // const flat = ['sevilla', 'cartuja', 'país vasco', 'granda']
  // const bedroom = [1, 2, 3, 4]
  // const bathroom = [1, 2, 2, 1]
  // const equiped = ['yes', 'no', 'no', 'yes']

  const { properties } = useSelector((state) => state.load)
  // console.log(properties);
  const flat = properties

  return (
    <Container>
      <ListGroup>
        {flat &&
          flat.map((item) => {
            return (
              <ListGroup.Item key={item.id}>
                <span>{item.street} </span>
                <span>{item.room} </span>
                <span>{item.bath} </span>
                <span>{item.price} </span>
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </Container>
  )
}

export default List
