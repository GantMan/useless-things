import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SinWave, Blink, TerribleName } from 'useless-things'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of SineWave</Text>

        <Text style={styles.thing}>Terrible Name Generator</Text>
        <Text style={styles.text}>
          Random 1: {TerribleName() + '\n'}
          Random 2: {TerribleName() + '\n'}
          Random 3: {TerribleName() + '\n'}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  thing: {
    fontSize: 18,
    color: '#fff',
    paddingTop: 40
  },
  text: {
    color: '#ccc'
  }
})
