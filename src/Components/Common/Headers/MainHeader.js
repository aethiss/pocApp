import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class HeaderExample extends Component {
  static propTypes = {
    drawerAction: PropTypes.func
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.props.drawerAction}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
        <Title>TOPSHOP</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='search' />
          </Button>
        </Right>
      </Header>
    )
  }
}