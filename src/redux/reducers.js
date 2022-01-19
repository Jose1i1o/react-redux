import { combineReducers } from 'redux'

import loadReducer from './loadProperties/reducer'

const reducers = combineReducers({
  load: loadReducer,
})

export default reducers
