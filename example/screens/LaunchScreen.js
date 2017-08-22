import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SinWave, Blink, TerribleName } from 'useless-things'

export default class App extends React.Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Useless Things</Text>

        <TouchableOpacity onPress={() => navigate('BlinkScreen')}>
          <Text style={[styles.thing, {paddingBottom: 30}]}>Blink Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('TerribleNameScreen')}>
          <Text style={[styles.thing, {paddingBottom: 30}]}>Terrible Name Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('SinWaveScreen')}>
          <Text style={[styles.thing, {paddingBottom: 30}]}>SinWave Examples</Text>
        </TouchableOpacity>
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
