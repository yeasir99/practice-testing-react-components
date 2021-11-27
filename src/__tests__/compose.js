import { compose } from './../utils'

const stringToArr = str => str.split(' ')

const uppercaseFirstCharOfArrStr = arr =>
  arr.map(str => str.charAt(0).toUpperCase() + str.slice(1))

const arrToString = arr => arr.join(' ')

test('compose test', () => {
  expect(
    compose(
      arrToString,
      uppercaseFirstCharOfArrStr,
      stringToArr,
    )('compose test'),
  ).toBe('Compose Test')
})
