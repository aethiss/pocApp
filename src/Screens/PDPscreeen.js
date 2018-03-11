import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getProduct } from '../Redux/Actions/PdpActions'

import { View, Text } from 'react-native'
import { Container, Content } from 'native-base'

import Header from "../Components/Common/Headers/PdpHeader"
import PdpContainer from '../Components/PDP/PdpContainer'

@connect((state) => ({
  product: state.pdp.pdp,
  loading: state.pdp.loading
}), { getProduct })
export default class PDPscreeen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    product: PropTypes.object,
    getProduct: PropTypes.func
  }

  componentDidMount() {
    const seoUrl = 'product/' + this.props.navigation.state.params.productId
    this.props.getProduct(seoUrl)
  }

  render() {
    const { product, loading } = this.props
    return(
      <Container>
        <Header navigation={this.props.navigation} />
        { (loading || !product.name) ?
          <View>
            <Text>Loading Product ...</Text>
          </View> :
          <PdpContainer product={product} />
        }
      </Container>
    )
  }
}
