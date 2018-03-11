import React, { Component } from 'react'
import { Provider } from 'react-redux'
import getTheme from './native-base-theme/components'
import platform from './native-base-theme/variables/platform'

import configureStore from './src/Redux/Reducers/ConfigureStore'

import { StyleProvider } from 'native-base'

import MainRouter from './src/Routing/MainRouter'

export default class AppInit extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false }))
    }
  }

  render() {

    return (
      <Provider store={this.state.store}>
        <StyleProvider style={getTheme(platform)}>
          <MainRouter />
        </StyleProvider>
      </Provider>
    )
  }
}
