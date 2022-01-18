import { useState } from 'react'
import { Form } from 'react-bootstrap'
import MultiRange from '../MultiRange'

const Filter = () => {
  const [result, setResult] = useState('')
  const handleChecked = (e) => {
    setResult(e)
    console.log(result)
  }
  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Form.Check
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            id={'flat'}
            onClick={(e) => handleChecked(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'house'}
            onClick={(e) => handleChecked(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            value={'duplex'}
            label={'Duplex'}
            id={'duplex'}
            onClick={(e) => handleChecked(e.target.value)}
          />
          <Form.Check
            type="checkbox"
            value={'penthouse'}
            label={'Penthouse'}
            id={'penthouse'}
            onClick={(e) => handleChecked(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check type="checkbox" value={'new'} label={'New homes'} />
          <Form.Check type="checkbox" value={'good'} label={'Good condition'} />
          <Form.Check
            type="checkbox"
            value={'renovation'}
            label={'Needs renovation'}
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Check type="checkbox" value={1} label={'1'} />
          <Form.Check type="checkbox" value={2} label={'2'} />
          <Form.Check type="checkbox" value={3} label={'3'} />
          <Form.Check type="checkbox" value={4} label={'4+'} />
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
