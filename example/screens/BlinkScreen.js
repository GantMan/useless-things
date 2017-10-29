import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Blink } from 'useless-things'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Examples of Blink Tag</Text>

        <Text style={styles.thing}>Blink Tag</Text>
        <Blink style={{color: 'white'}}>Look at this blink!</Blink>

        <Text style={styles.thing}>Blink Tag with added props on an Image</Text>
        <Blink duration={1000}>
          <Image
            style={{width: 200, aspectRatio: 1}}
            source={{uri: 'http://i.imgur.com/HLQp7FV.png'}}
          />
        </Blink>
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
