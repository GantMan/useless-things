import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default class App extends React.Component {
  render () {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Useless Things</Text>

        <TouchableOpacity style={styles.touchy} onPress={() => navigate('BlinkScreen')}>
          <Text style={styles.thing}>Blink Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchy} onPress={() => navigate('TerribleNameScreen')}>
          <Text style={styles.thing}>Terrible Name Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchy} onPress={() => navigate('SinWaveScreen')}>
          <Text style={styles.thing}>SinWave Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchy} onPress={() => navigate('RainbowTextScreen')}>
          <Text style={styles.thing}>RainbowText Examples</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchy} onPress={() => navigate('TrumpSortScreen')}>
          <Text style={styles.thing}>TrumpSort Examples</Text>
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
  },
  touchy: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: '#ccc'
  }
})
