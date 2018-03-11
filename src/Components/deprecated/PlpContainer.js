import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Dimensions, View, Text, Image } from 'react-native'

export default class PlpContainer extends Component {
  static propTypes = {
    products: PropTypes.array
  }

  replaceToHttps = (urlString) => {
    return urlString.replace("http://", "https://")
  }

  render() {
    // console.log(Dimensions.get('window'))
    const { products } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {
            products.map((product, key) => {
              if (key % 2 === 0)
                return (
                  <View key={key} style={styles.box}>
                    <Text>{product.unitPrice} GBP</Text>
                    <Image
                      style={styles.imageBox}
                      source={{uri: this.replaceToHttps(product.assets[0].url)}}
                    />
                    <Text>{product.name}</Text>
                  </View>
                )
            })
          }
        </View>
        <View style={styles.space_between_columns}/>
        <View style={styles.column}>
          {
            products.map((product, key) => {
              if (key % 2 !== 0)
                return (
                  <View key={key} style={styles.box}>
                    <Text>{product.unitPrice} GBP</Text>
                    <Image
                      style={styles.imageBox}
                      source={{uri: this.replaceToHttps(product.assets[0].url)}}
                    />
                    <Text>{product.name}</Text>
                  </View>
                )
            })
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 15,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF'
  },
  column: {
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    // height:200,
    width: Dimensions.get('window') - 10
  },
  space_between_columns:{
    width: 25
  },
  box: {
    height:260,
    width: 160,
    position: 'relative',
    // borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems:'center'
  },
  imageBox: {
    width: 150,
    height: 200
  }
})