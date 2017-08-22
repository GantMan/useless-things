import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SinWave, Blink, TerribleName } from 'useless-things'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of SineWave</Text>

        <Text style={[styles.thing, {paddingBottom: 30}]}>SinWave default</Text>
        <SinWave />

        <Text style={[styles.thing, {paddingBottom: 30}]}>SinWave with added props</Text>
        <SinWave
          flat
          fade
          dotCount={50}
          delayGap={200}
          period={3000}
          style={{backgroundColor: '#feffff'}}
        />
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
