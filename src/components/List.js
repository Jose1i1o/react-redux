import { useSelector } from 'react-redux'
import { Container, ListGroup } from 'react-bootstrap'
import { useEffect } from 'react'
import {FaBath, FaBed} from 'react-icons/fa'
import {BsHouse} from 'react-icons/bs'

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
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>Address: {item.street}{item.city}</h5>
                    <span>Price: {item.price}</span>
                  </div>
                  <div>
                    <span>Characteristics: </span>
                    <span className="m-4" ><FaBed />{item.room}</span>
                    <span><FaBath className="m-4"/>{item.bath}</span>
                    <span><BsHouse className="m-4"/>{item.size}</span>
                    <span>{item.status}</span>
                  </div>
                </div>
              </ListGroup.Item>
              )
            })}
      </ListGroup>
    </Container>
  )
}

export default List
