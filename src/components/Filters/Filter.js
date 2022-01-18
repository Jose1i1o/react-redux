import { Form } from 'react-bootstrap'
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { FilterReducer } from '../../redux/loadProperties/actions'
import MultiRange from '../MultiRange'

const Filter = () => {

  const dispatch = useDispatch()
  const [result, setResult] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(result)
    await dispatch(FilterReducer(result + ' ' + setResult))
    console.log(FilterReducer(result + ' ' + setResult))
  }

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Form.Check
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            onChange={(e) => setResult(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'House'}
            onChange={(e) => setResult(e.target.value)}
          />
          <Form.Check type="checkbox" value={'duplex'} label={'Duplex'} onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check type="checkbox" value={'penthouse'} label={'Penthouse'} onChange={(e) => setResult(e.target.value)}
/>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check type="checkbox" value={'new'} label={'New homes'}             onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check type="checkbox" value={'good'} label={'Good condition'}             onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check
            type="checkbox"
            value={'renovation'}
            label={'Needs renovation'}
            onChange={(e) => setResult(e.target.value)}

          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Check type="checkbox" value={1} label={'1'}             onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check type="checkbox" value={2} label={'2'}             onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check type="checkbox" value={3} label={'3'}             onChange={(e) => setResult(e.target.value)}
/>
          <Form.Check type="checkbox" value={4} label={'4+'}             onChange={(e) => setResult(e.target.value)}
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
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
  )
}

export default Filter
