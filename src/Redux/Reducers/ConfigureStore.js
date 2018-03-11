import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './index'


export default function configureStore(initialState = {}) {
  const store = createStore(
    reducer,
    ...initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  if (module && module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
