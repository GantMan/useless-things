import React, { PureComponent } from 'react'
import { StyleSheet, Animated } from 'react-native'

export default class RainbowText extends PureComponent {
  constructor (props) {
    super(props)

    // Initialize input range
    while (this.inputRange.length < this.colors.length)
      this.inputRange.push(this.inputRange.length + 1)

    this.colorValue = new Animated.Value(0)

    Animated.loop(
      Animated.timing(
        this.colorValue,
        {
          toValue: 28,
          duration: props.duration || 500
        }
      )
    ).start()
  }

  inputRange = [];
  colors = [
    'rgb(255, 8, 28)',
    'rgb(255, 8, 59)',
    'rgb(255, 9, 104)',
    'rgb(255, 9, 153)',
    'rgb(255, 10, 202)',
    'rgb(255, 10, 249)',
    'rgb(209, 7, 250)',
    'rgb(158, 5, 249)',
    'rgb(102, 4, 249)',
    'rgb(40, 2, 248)',
    'rgb(0, 2, 248)',
    'rgb(0, 51, 249)',
    'rgb(0, 102, 250)',
    'rgb(0, 153, 251)',
    'rgb(0, 204, 252)',
    'rgb(0, 255, 254)',
    'rgb(0, 255, 206)',
    'rgb(0, 255, 158)',
    'rgb(0, 254, 114)',
    'rgb(0, 255, 76)',
    'rgb(0, 255, 58)',
    'rgb(63, 255, 58)',
    'rgb(138, 253, 60)',
    'rgb(200, 255, 62)',
    'rgb(255, 255, 65)',
    'rgb(255, 204, 54)',
    'rgb(255, 153, 44)',
    'rgb(255, 103, 35)',
    'rgb(255, 53, 30)'
  ];

  render () {
    const color = this.colorValue.interpolate({
      inputRange: this.inputRange,
      outputRange: this.colors,
    })

    return (
      <Animated.Text style={[this.props.style, { color }]}>
        {this.props.children}
      </Animated.Text>
    )
  }
}
