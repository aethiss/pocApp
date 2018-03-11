import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { List, ListItem } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class PLPcontainer extends Component {
  static propTypes = {
    products: PropTypes.object,
    navigation: PropTypes.object
  }

  replaceToHttps = (urlString) => {
    return urlString.replace("http://", "https://")
  }

  renderPlpProduct = (product) => {
    return(
      <View style={styles.productView}>
        <View>
          <Image
            style={styles.productImageBox}
            source={{uri: this.replaceToHttps(product.assets[0].url)}}
          />
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>£{product.unitPrice}</Text>
      </View>
    )
  }

  renderemptyCategory = () => {
    return (
      <View>
        <Text>No Product Available</Text>
      </View>
    )
  }

  renderProductLoader = () => {
    return (
      <View>
        <Text>Product Loading</Text>
      </View>
    )
  }

  render() {
    const { products, navigation } = this.props

    if (products.loading) return this.renderProductLoader()
    if (products.plp.length < 1) return this.renderemptyCategory()
    return (
      <Grid>
        <Col style={styles.columnLeft}>
          {
            products.plp.map((product, key) => {
              if (key % 2 === 0)
                return (
                  <View key={key} style={styles.productContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('PDPscreeen', { productId: product.productId }) }
                      }
                      style={styles.productDetails}
                    >
                      {this.renderPlpProduct(product)}
                    </TouchableOpacity>
                  </View>
                )
            })
          }
        </Col>
        <Col style={styles.columnRight}>
          {
            products.plp.map((product, key) => {
              if (key % 2 !== 0)
                return (
                  <View key={key} style={styles.productContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('PDPscreeen', { productId: product.productId }) }
                      }
                      style={styles.productDetails}
                    >
                      {this.renderPlpProduct(product)}
                    </TouchableOpacity>
                  </View>
                )
            })
          }
        </Col>
      </Grid>
    )
  }

}

const styles = StyleSheet.create({
  columnLeft: {
    backgroundColor: '#FFFFFF'
  },
  columnRight: {
    backgroundColor: '#FFFFFF'
  },
  productContainer: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  productDetails: {
    flexDirection:'row'
  },
  productView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10
  },
  productImageBox: {
    width: 150,
    height: 200
  },
  productName: {
    fontWeight: 'bold'
  },
  productPrice: {

  }
})
