// https://medium.com/@gantlaborde/trump-sort-a-new-sorting-algorithm-b37b1133356a
export default (items) => {
  let wall = 0
  let sorted = []
  // iterate over values
  for (let i = 0; i < items.length; i++) {
    if (items[i] >= wall) {
      sorted.push(items[i])
      wall = items[i]
    }
  }
  return sorted
}
