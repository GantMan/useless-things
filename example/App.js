import React from 'react'
import AppNavigation from './navigation/AppNavigation'
import { StyleSheet, Text, View } from 'react-native'
import { SinWave, Blink, TerribleName } from 'useless-things'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <AppNavigation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  }
})
