import { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import getData from '../../config/getDb'
import { loadProperties, setFiltered } from '../../redux/loadProperties/actions'

import MultiRange from '../MultiRange'

const Filter = () => {
  const dispatch = useDispatch()
  const { filters } = useSelector((state) => state.load)

  useEffect(() => {
    if (localStorage.getItem('filters')) {
      const localStorageData = localStorage.getItem('filters')
      dispatch(setFiltered(JSON.parse(localStorageData)))
    } else {
      getData.get('/properties').then((res) => {
        dispatch(loadProperties(res.data))
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters))
  }, [filters])

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

  const handleChangeBathroom = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        bath: {
          ...filters.bath,
          [e.target.value]: e.target.checked ? true : false,
        },
      })
    )
  }

  const handleChangePublication = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        publication_date: e.target.value,
      })
    )
  }
  const handleChangeEquipment = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        equipment: e.target.value,
      })
    )
  }
  const handleChangeMoreFilters = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        more_filters: {
          ...filters.more_filters,
          [e.target.value]: e.target.checked ? true : false,
        },
      })
    )
  }
  const handleMinPrice = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        min_price: e.target.value,
      })
    )
  }
  const handleMaxPrice = (e) => {
    dispatch(
      setFiltered({
        ...filters,
        max_price: e.target.value,
      })
    )
  }

  return (
    <Form className="d-flex">
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Type of home</Form.Label>
          <Form.Check
            checked={filters['type']['flat/apartment'] === true ? true : false}
            id="flat/apartment"
            type="checkbox"
            value={'flat/apartment'}
            label={'Flat or apartment'}
            onChange={handleChangeType}
          />
          <Form.Check
            checked={filters['type']['house'] === true ? true : false}
            type="checkbox"
            value={'house'}
            label={'House'}
            id="house"
            onChange={handleChangeType}
          />
          <Form.Check
            checked={filters['type']['duplex'] === true ? true : false}
            id="duplex"
            type="checkbox"
            value={'duplex'}
            label={'Duplex'}
            onChange={handleChangeType}
          />
          <Form.Check
            checked={filters['type']['penthouse'] === true ? true : false}
            id="penthouse"
            type="checkbox"
            value={'penthouse'}
            label={'Penthouse'}
            onChange={handleChangeType}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check
            checked={filters['condition']['new'] === true ? true : false}
            id="new"
            type="checkbox"
            value={'new'}
            label={'New homes'}
            onChange={handleChangeCondition}
          />
          <Form.Check
            checked={filters['condition']['good'] === true ? true : false}
            id="good"
            type="checkbox"
            value={'good'}
            label={'Good condition'}
            onChange={handleChangeCondition}
          />
          <Form.Check
            checked={filters['condition']['renovation'] === true ? true : false}
            id="renovation"
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
            checked={filters['room']['1'] === true ? true : false}
            id="bed-1"
            type="checkbox"
            value={'1'}
            label={'1'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            checked={filters['room']['2'] === true ? true : false}
            id="bed-2"
            type="checkbox"
            value={'2'}
            label={'2'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            checked={filters['room']['3'] === true ? true : false}
            id="bed-3"
            type="checkbox"
            value={'3'}
            label={'3'}
            onChange={handleChangeBedroom}
          />
          <Form.Check
            checked={filters['room']['4+'] === true ? true : false}
            id="bed-4"
            type="checkbox"
            value={'4+'}
            label={'4+'}
            onChange={handleChangeBedroom}
          />
        </Form.Group>
        {/* <MultiRange min={30000} max={700000} onChange={() => null} /> */}
        <div>
          <Form.Label>Min price</Form.Label>
          <Form.Control
            name="min_price"
            value={filters.min_price ? filters.min_price : ''}
            className="mb-3"
            type="text"
            id="min_price"
            onChange={handleMinPrice}
          />
        </div>
        <div>
          <Form.Label>Max Price</Form.Label>
          <Form.Control
            name="max_price"
            value={filters.max_price ? filters.max_price : ''}
            className="mb-3"
            type="text"
            id="max_price"
            onChange={handleMaxPrice}
          />
        </div>
      </div>
      <div className="px-3">
        <Form.Group className="mb-4">
          <Form.Label>Bathrooms</Form.Label>
          <Form.Check
            checked={filters['bath']['1'] === true ? true : false}
            id="bath-1"
            type="checkbox"
            value={'1'}
            label={'1'}
            onChange={handleChangeBathroom}
          />
          <Form.Check
            checked={filters['bath']['2'] === true ? true : false}
            id="bath-2"
            type="checkbox"
            value={'2'}
            label={'2'}
            onChange={handleChangeBathroom}
          />
          <Form.Check
            checked={filters['bath']['3+'] === true ? true : false}
            id="bath-3"
            type="checkbox"
            value={'3+'}
            label={'3+'}
            onChange={handleChangeBathroom}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Publication date</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangePublication}
          >
            <option value="null">Select publication date</option>
            <option value="1">Last day</option>
            <option value="7">Last week</option>
            <option value="30">Last month</option>
          </Form.Select>
        </Form.Group>
      </div>
      <div>
        <Form.Group className="mb-4">
          <Form.Label>Equipment</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeEquipment}
            value={filters['equipment'] ? filters['equipment'] : ''}
          >
            <option disabled>Select equipment</option>
            <option value="indifferent">Indifferent</option>
            <option value="furnished">Furnished</option>
            <option value="unfurnished">Unfurnished</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>More filters</Form.Label>
          <Form.Check
            id="pet"
            type="checkbox"
            value={'pet'}
            label={'Pets allowed'}
            onChange={handleChangeMoreFilters}
          />
          <Form.Check
            id="lift"
            type="checkbox"
            value={'lift'}
            label={'Lift'}
            onChange={handleChangeMoreFilters}
          />
          <Form.Check
            id="garden"
            type="checkbox"
            value={'garden'}
            label={'Garden'}
            onChange={handleChangeMoreFilters}
          />
          <Form.Check
            id="air_conditioning"
            type="checkbox"
            value={'air_conditioning'}
            label={'Air conditioning'}
            onChange={handleChangeMoreFilters}
          />
          <Form.Check
            id="swimming_pool"
            type="checkbox"
            value={'swimming_pool'}
            label={'Swimming pool'}
            onChange={handleChangeMoreFilters}
          />
          <Form.Check
            id="terrace"
            type="checkbox"
            value={'terrace'}
            label={'Terrace'}
            onChange={handleChangeMoreFilters}
          />
        </Form.Group>
      </div>
    </Form>
  )
}

export default Filter
