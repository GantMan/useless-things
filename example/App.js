import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SinWave } from 'useless-things'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Useless Things</Text>

        <Text style={styles.thing}>SinWave</Text>
        <SinWave/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    padding: 20
  },
  thing: {
    fontSize: 18,
    color: '#fff',
    paddingBottom: 30
  }
})
