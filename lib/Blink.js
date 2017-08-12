import React, { PureComponent } from 'react'
import { StyleSheet, Animated } from 'react-native'

export default class Blink extends PureComponent {
  constructor (props) {
    super(props)
    this.opacityValue = new Animated.Value(1)
    Animated.loop(
      Animated.timing(
        this.opacityValue,
        {
          toValue: 0,
          duration: props.duration || 250
        }
      )
    ).start()
  }

  render () {
    const opacity = this.opacityValue
    if (typeof this.props.children === 'string') {
      return (
        <Animated.Text style={[styles.blinkLabel, this.props.style, {opacity}]}>
          {this.props.children}
        </Animated.Text>
      )
    }
    return (
      <Animated.View style={[this.props.style, {opacity}]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  blinkLabel: {
    fontSize: 14,
    color: '#333333'
  }
})
