import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFiltered } from '../../redux/loadProperties/actions'

import MultiRange from '../MultiRange'
import { isFocusable } from '@testing-library/user-event/dist/utils'

// const { filters, properties } = useSelector((state) => state.load)

// const handleChange = () => {

// }
// dispatch(
//   setFilter({ type: e.target.checked ? e.target.value : null })
// )

const Filter = () => {
  const dispatch = useDispatch()

  const { filters } = useSelector((state) => state.load)

  const handleChangeType = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        type: {
          ...filters.type,
          [e.target.value]: e.target.checked ? true : false,
        },
      })
    )
  }

  const handleChangeCondition = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        condition: {
          ...filters.condition,
          [e.target.value]: e.target.checked ? true : false,
        },
      })
    )
  }

  const handleChangeBedroom = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        room: {
          ...filters.room,
          [e.target.value]: e.target.checked ? true : false,
        },
      })
    )
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
            onChange={handleChangeType}
          />
          <Form.Check
            type="checkbox"
            value={'house'}
            label={'House'}
            id={'House'}
            onChange={handleChangeType}
          />
          <Form.Check
            type="checkbox"
            value={'duplex'}
            label={'Duplex'}
            onChange={handleChangeType}
          />
          <Form.Check
            type="checkbox"
            value={'penthouse'}
            label={'Penthouse'}
            onChange={handleChangeType}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check
            type="checkbox"
            value={'new'}
            label={'New homes'}
            onChange={handleChangeCondition}
          />
          <Form.Check
            type="checkbox"
            value={'good'}
            label={'Good condition'}
            onChange={handleChangeCondition}
          />
          <Form.Check
            type="checkbox"
            value={'renovation'}
            label={'Needs renovation'}
            onChange={handleChangeCondition}
          />
        </Form.Group>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bedrooms</Form.Label>
          <Form.Check
            type="checkbox"
            value={'1'}
            label={'1'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            type="checkbox"
            value={'2'}
            label={'2'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            type="checkbox"
            value={'3'}
            label={'3'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            type="checkbox"
            value={'4'}
            label={'4+'}
            onChange={handleChangeBedroom}
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
