import { createReducer } from './ReducerHelper'

const initialState = {
  loading: false,
  seoUrl: '',
  plp: []
}

const plpReducer = createReducer(initialState, {
  UPDATE_PLP: (currentState, { plp }) => ({ ...currentState, loading: false, plp }),
  LOAD_PLP: (currentState) => ({ ...currentState, loading: true, plp: [] }),
  UPDATE_SEO_URL: (currentState, { seoUrl }) => ({ ...currentState, seoUrl  })

})

export default plpReducer
