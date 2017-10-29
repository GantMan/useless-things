import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RainbowText } from 'useless-things'

export default class RainbowTextScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of RainbowText Tag</Text>

        <Text style={styles.thing}>RainbowText Tag</Text>
        <RainbowText>{'Look at this rainbow!'}</RainbowText>
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
})
