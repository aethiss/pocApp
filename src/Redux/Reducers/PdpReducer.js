import { createReducer } from "./ReducerHelper"

const initialState = {
  loading: false,
  pdp: {}
}

const pdpReducer = createReducer(initialState, {
  UPDATE_PDP: (currentState, { pdp }) => ({ loading: false, pdp }),
  LOAD_PDP: (currentState) => ({ loading: true, pdp: {} }),
  RESET_PDP: (currentState) => ({ loading: false, pdp: {} })
})

export default pdpReducer
