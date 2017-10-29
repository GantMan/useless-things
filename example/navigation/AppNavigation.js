import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../screens/LaunchScreen'
import SinWaveScreen from '../screens/SinWaveScreen'
import BlinkScreen from '../screens/BlinkScreen'
import TerribleNameScreen from '../screens/TerribleNameScreen'
import RainbowTextScreen from '../screens/RainbowTextScreen'
import TrumpSortScreen from '../screens/TrumpSortScreen'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SinWaveScreen: { screen: SinWaveScreen },
  BlinkScreen: { screen: BlinkScreen },
  TerribleNameScreen: { screen: TerribleNameScreen },
  RainbowTextScreen: { screen: RainbowTextScreen },
  TrumpSortScreen: { screen: TrumpSortScreen }
}, {
  // Default config for all screens
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    title: 'Useless Things',
    headerStyle: {backgroundColor: 'rgba(222, 222, 222, 0.7)'}
  }
})

export default PrimaryNav
