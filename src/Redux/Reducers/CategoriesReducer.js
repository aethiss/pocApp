import { createReducer } from './ReducerHelper'

const initialState = {
  primary: [],
  subCategory: []
}

const categoriesReducer = createReducer(initialState, {
  UPDATE_CATEGORIES: (currentState, { category }) => ( { ...currentState, primary: category } ),
  UPDATE_SUBCATEGORY: (currentState, { category }) => ( { ...currentState, subCategory: category } )

})

export default categoriesReducer
