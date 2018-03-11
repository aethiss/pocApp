import { combineReducers } from 'redux'
import categories from './CategoriesReducer'
import plp from './PlpReducer'
import pdp from './PdpReducer'

export default combineReducers({
  categories,
  plp,
  pdp
})
