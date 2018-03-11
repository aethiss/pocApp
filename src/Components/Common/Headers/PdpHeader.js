import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class HeaderExample extends Component {
  static propTypes = {
    navigation: PropTypes.object
  }

  goBackAction = () => {
    this.props.navigation.goBack()
  }

  render() {
    console.log()
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => { this.goBackAction() }}>
            <Icon name='ios-arrow-back' />
          </Button>
        </Left>
        <Body>
        <Title>TOPSHOP</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='md-cart' />
          </Button>
        </Right>
      </Header>
    )
  }
}