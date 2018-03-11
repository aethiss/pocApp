import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Content, List, ListItem, Left, Icon, Body } from 'native-base'

import { getProductList } from '../Redux/Actions/PlpActions'

@connect((state) => ({
  category: state.categories.primary
}), { getProductList })
export default class Sidebar extends Component {
  static propTypes = {
    category: PropTypes.array,
    drawerAction: PropTypes.func,
    getProductList: PropTypes.func
  }

  navigateToPlp = (seoUrl) => {
    console.log('SeoUrl : ', seoUrl)
    this.props.getProductList(seoUrl)
    this.props.drawerAction()
  }

  render() {
    const { category } = this.props
    console.log(category)
    return(
      <Content bounces={false} style={styles.content}>
        <List>
          <ListItem itemHeader first style={styles.divider}>
            <Text>Find A Store</Text>
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="ios-locate" />
            </Left>
            <Body>
              <Text>I'm looking for a store in</Text>
            </Body>
          </ListItem>
        </List>
        { category.length > 0 &&
          <List dataArray={category}
                renderRow={(item) => {
                  return (item.index === 1) ?
                    <ListItem itemHeader first style={styles.divider}>
                      <Text>{item.label}</Text>
                    </ListItem> :
                    <ListItem style={styles.listitem}>
                      <TouchableOpacity onPress={() => { this.navigateToPlp(item.seoUrl)}} style={styles.itemDetail}>
                        <Text style={styles.itemtext}>{item.label}</Text>
                      </TouchableOpacity>
                    </ListItem>
                }
                }>
          </List>
        }
      </Content>
    )
  }

}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    top: -1,
    backgroundColor: '#fff'
  },
  divider: {
    backgroundColor: '#c4c5c8',
    height: 45
  },
  listitem: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  itemDetail: {
    flexDirection:'row'
  },
  itemtext: {
    flex: 1,
    height: 25
    // borderWidth:1,
  }
})
