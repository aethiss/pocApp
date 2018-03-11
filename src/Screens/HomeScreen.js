import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Content, Drawer } from 'native-base'

import { getCategory } from '../Redux/Actions/CategoryActions'

import Sidebar from "../Components/Sidebar"
import Header from "../Components/Common/Headers/MainHeader"
import Home from "../Components/Home"
import PlpContainer from '../Components/PLP/PLPcontainer'

@connect((state) => ({
  products: state.plp
}), { getCategory })
export default class HomeScreen extends Component {
  static propTypes = {
    getCategory: PropTypes.func,
    products: PropTypes.object,
    navigation: PropTypes.object
  }

  componentDidMount() {
    this.props.getCategory()
  }

  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }

  render() {
    const { products, navigation } = this.props
    return(
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        content={<Sidebar drawerAction={() => this.closeDrawer()} />}
        onClose={() => this.closeDrawer()} >

        <Container>
          <Header drawerAction={() => this.openDrawer()} />
          <Content style={{flex: 1}}>
            { (products.seoUrl === '') ?
              <Home /> :
              <PlpContainer
                products={products}
                navigation={navigation}
              />
            }
          </Content>
        </Container>

      </Drawer>
    )
  }
}
