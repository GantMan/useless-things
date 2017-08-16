import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native'

const defaultDotSize = 10

export default class SinWave extends PureComponent {

  componentWillMount() {
    this.animatedValues = []
    this.animations = []

    for (let i = 0; i < this.props.dotCount; i++) {
      this.animatedValues.push(new Animated.Value(0))
      this.animations.push(this.animateSin(this.animatedValues[i], i))
    }

    // start the animation
    Animated.stagger(this.props.delayGap, this.animations).start()
  }

  animateSin = (val, index) => {
    const {crest, period} = this.props

    // up n down
    return Animated.loop(
      Animated.sequence([
        Animated.timing(val, {
          toValue: crest,
          duration: period/2,
          useNativeDriver: true
        }),
        Animated.timing(val, {
          toValue: 0,
          duration: period/2,
          useNativeDriver: true
        })
      ])
    )
  }

  render = () =>
    <View style={{flexDirection: 'row'}}>
      {
        this.animatedValues.map((val, index) => {
          const {fade, flat, dotCount} = this.props
          const gradient = fade ? index/dotCount : 1
          const flatten = flat ?
            { height: gradient * 5 } :
            {}
          const animatedStyle = {
            ...flatten,
            transform: [{translateY: val}],
            opacity: gradient
          }
          return (
            <Animated.View key={`dot${index}`} style={[styles.circle, animatedStyle, this.props.style]} />
          )
        })
      }
    </View>
}

SinWave.defaultProps = {
  dotCount: 5,
  delayGap: 400,
  crest: -30,
  flat: false,
  fade: false,
  period: 2000
}

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: defaultDotSize,
    width: defaultDotSize,
    borderRadius: defaultDotSize/2
  },
})
