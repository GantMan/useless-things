import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TrumpSort } from 'useless-things'

const LENGTH = 15
const randomArray = () => [...new Array(LENGTH)]
  .map(() => Math.round(Math.random() * 99))

export default class App extends React.Component {
  render () {
    const currentArray = randomArray()
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Trump Sort</Text>

        <Text style={styles.thing}>Trump Sort Random Array</Text>
        <Text style={styles.text}>
          Random Array: {'\n' + currentArray + '\n\n'}
          Trump Sorted: {TrumpSort(currentArray) + '\n'}
        </Text>

        <Text style={[styles.title, {backgroundColor: 'rgba(0,0,0,0.4)'}]} onPress={() => this.forceUpdate()}>
          YUGE TRUMP SORT
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
