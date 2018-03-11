import { StackNavigator } from 'react-navigation'
// import TabNavigation from './TabRouter'
import HomeScreen from '../Screens/HomeScreen'
import PdpScreen from '../Screens/PDPscreeen'

const MainStackRouter = StackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  PDPscreeen: {
    path: 'PDPscreeen/:productId',
    screen: PdpScreen
  }
}, {
  headerMode: 'none',
  header: null
})

export default MainStackRouter
