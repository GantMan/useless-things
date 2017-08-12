![useless things](./_art/useless-things.png)
# Storage space of things that should not be

## Comes With:
### SinWave
How often have you thought, 'Wow, this app needs dots that move"?  Well now you can quickly and easily add sinusoidal dots to any application with ease.

```js
import { SinWave } from 'useless-things'
...
  <SinWave>
...
  <SinWave
    flat
    fade
    dotCount={50}
    delayGap={200}
    period={3000}
    style={{backgroundColor: '#feffff'}}
  />
```
SinWave props include the following:
* flat `boolean (false)`: Changes dots to lines
* fade `boolean (false)`: Changes opacity of dots in gradiation from 0 to 1
* dotCount `number (5)`: Number of dots in your sinwave
* delayGap `number (400)`: Milliseconds between each animation start
* period `number (2000)`: Milliseconds for one single oscillation
* style `StyleSheet ({})`: Additional styles

## Incoming:
* blink tag
* marquee tag
* terrible name genertor
* tiled background
* konami code event
`... and so much more`


## To Run Example
```sh
$ cd examples
$ yarn
$ yarn ios
```
