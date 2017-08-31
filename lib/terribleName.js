/*
Use this to create beautiful things like:
  carnival-joining perverted grapes
  stripped effervescent shart
  acrid haunted furry
  pulsing confused fetish
  purified possibly-ambiguous cheese-fingers
  drunken stripped backdoor
  swollen carnival-joining backdoor
  haunted effervescent twerk
  stripped hairless clown
*/

const adjectives = [
  'infeasible',
  'possibly-ambiguous',
  'effervescent',
  'cucumberish',
  'gesticulating',
  'swollen',
  'bulging',
  'bifurcated',
  'overused',
  'bacterial',
  'carnival-joining',
  'drunken',
  'weathered',
  'smelly',
  'pulsing',
  'tangled',
  'confused',
  'fecal',
  'perverted',
  'stripped',
  'acrid',
  'haunted',
  'purified',
  'flapping',
  'hairless',
  'weaponized',
  'crusty',
  'drooling,
  'gunktastic'
]

const nouns = [
  'hickey',
  'grapes',
  'eggplant',
  'shart',
  'twerk',
  'restraining order',
  'sniff-weasel',
  'vomit',
  'furry',
  'backdoor',
  'cheese-fingers',
  'clown',
  'wizard',
  'fetish',
  'muffin-top',
  'hissy-fit',
  'hot dog',
  'stink-cave'
]

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index
}

const sampleSet = (items, quantity = 1) => {
  let data = []
  while (data.length < quantity) {
    const rando = items[Math.floor(Math.random()*items.length)]
    data.push(rando)
    data = data.filter(onlyUnique)
  }
  return data
}

// TADAAAAAAA
export default (joiner = ' ') => sampleSet(adjectives, 2).concat(sampleSet(nouns)).join(joiner)
