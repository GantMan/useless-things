import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SinWave, Blink, TerribleName } from 'useless-things'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Terrible Names</Text>

        <Text style={styles.thing}>Terrible Name Generator</Text>
        <Text style={styles.text}>
          Random 1: {TerribleName() + '\n'}
          Random 2: {TerribleName() + '\n'}
          With Separator: {TerribleName('-') + '\n'}
        </Text>

        <Text style={[styles.title, {backgroundColor: 'rgba(0,0,0,0.4)'}]} onPress={() => this.forceUpdate()}>
          GIVE ME MOAR!!!!
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
    padding: 10
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
