// import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap'

const List = () => {
  const flat = ['sevilla', 'cartuja', 'país vasco', 'granda']
  const bedroom = [1, 2, 3, 4]
  const bathroom = [1, 2, 2, 1]
  const equiped = ['yes', 'no', 'no', 'yes']

  return (
    <Container>
      <ListGroup>
        {flat.map((item, index) => {
          return (
            <ListGroup.Item key={index}>
              <span>{item} </span>
              <span>{bedroom[index]} </span>
              <span>{bathroom[index]} </span>
              <span>{equiped[index]} </span>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </Container>
  )
}

export default List
