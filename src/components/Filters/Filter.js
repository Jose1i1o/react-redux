import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFiltered } from '../../redux/loadProperties/actions'

import MultiRange from '../MultiRange'

// const { filters, properties } = useSelector((state) => state.load)

// const handleChange = () => {

// }
// dispatch(
//   setFilter({ type: e.target.checked ? e.target.value : null })
// )

const Filter = () => {
  const dispatch = useDispatch()
  const [type, setType] = useState({})
  const { filters, properties } = useSelector((state) => state.load)
  useEffect(() => {
    dispatch(setFiltered(type))
    // console.log(filters)
  }, [type])
  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Form.Check
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            onChange={(e) =>
              setType({ ...type, flat: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'House'}
            onChange={(e) =>
              setType({ ...type, house: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={'duplex'}
            label={'Duplex'}
            onChange={(e) =>
              setType({ ...type, duplex: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={'penthouse'}
            label={'Penthouse'}
            onChange={(e) =>
              setType({ ...type, penthouse: e.target.checked ? true : false })
            }
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check
            type="checkbox"
            value={'new'}
            label={'New homes'}
            onChange={(e) =>
              setType({ ...type, new: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={'good'}
            label={'Good condition'}
            onChange={(e) =>
              setType({ ...type, good: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={'renovation'}
            label={'Needs renovation'}
            onChange={(e) =>
              setType({ ...type, renovation: e.target.checked ? true : false })
            }
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Check
            type="checkbox"
            value={1}
            label={'1'}
            onChange={(e) =>
              setType({ ...type, 1: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={2}
            label={'2'}
            onChange={(e) =>
              setType({ ...type, 2: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={3}
            label={'3'}
            onChange={(e) =>
              setType({ ...type, 3: e.target.checked ? true : false })
            }
          />
          <Form.Check
            type="checkbox"
            value={4}
            label={'4+'}
            onChange={(e) =>
              setType({ ...type, 4: e.target.checked ? true : false })
            }
          />
        </Form.Group>
        <MultiRange min={30000} max={700000} onChange={() => null} />
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Check type="checkbox" value={1} label={'1'} />
          <Form.Check type="checkbox" value={2} label={'2'} />
          <Form.Check type="checkbox" value={3} label={'3+'} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Publication date</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select publication date</option>
            <option value="day">Last day</option>
            <option value="week">Last week</option>
            <option value="month">Last month</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-4">
          <Form.Label>Equipment</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select equipment</option>
            <option value="no-pref">Indifferent</option>
            <option value="furnished">Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>More filters</Form.Label>
          <Form.Check type="checkbox" value={'pets'} label={'Pets allowed'} />
          <Form.Check type="checkbox" value={'lift'} label={'Lift'} />
          <Form.Check type="checkbox" value={'garden'} label={'Garden'} />
          <Form.Check
            type="checkbox"
            value={'air_conditioning'}
            label={'Air conditioning'}
          />
          <Form.Check
            type="checkbox"
            value={'swimming_pool'}
            label={'Swimming pool'}
          />
          <Form.Check type="checkbox" value={'terrace'} label={'Terrace'} />
        </Form.Group>
      </div>
    </Form>
  )
}

export default Filter
