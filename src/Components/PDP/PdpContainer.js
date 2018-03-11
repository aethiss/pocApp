import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Animated, View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { Content } from 'native-base'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const CONTENT_FIX_HEIGHT = deviceHeight - 80
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class PdpContainer extends Component {
  static propTypes = {
    product: PropTypes.object
  }

  // numItems = images.length
  // itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  replaceToHttps = (urlString) => {
    return urlString.replace("http://", "https://")
  }

  filterNomalImageAssets(assets) {
    let normalAssetsArray = []
    assets.map((asset) => {
      if (asset.assetType === 'IMAGE_NORMAL') normalAssetsArray.push(asset.url.replace("http://", "https://"))
    })

    return normalAssetsArray
  }

  render() {
    let imageArray = []
    let image_Normal = this.filterNomalImageAssets(this.props.product.assets)

    image_Normal.forEach((image, i) => {
      // console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)
    })

    return (
      <Content>
        <View>
          <ScrollView
            style={{height: CONTENT_FIX_HEIGHT}}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
              )
            }
          >
            {imageArray}
          </ScrollView>
          <View style={{flex: 1, borderWidth: 1, height: 30}} >
            <Text>Add on bag here</Text>
          </View>
          <Text style={{alignSelf: 'flex-end'}}>
            Some other here
          </Text>
        </View>
      </Content>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})