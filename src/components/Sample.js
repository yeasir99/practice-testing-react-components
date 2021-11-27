import { compose } from './../utils'

function Sample() {
  const stringToArr = str => str.split(' ')

  const uppercaseFirstCharOfArrStr = arr =>
    arr.map(str => str.charAt(0).toUpperCase() + str.slice(1))

  const arrToString = arr => arr.join(' ')

  // Function invoke right to left
  // left <---<---<--- right

  const capitalizeString = compose(
    arrToString,
    uppercaseFirstCharOfArrStr,
    stringToArr,
  )
  return (
    <div>
      <h1>{capitalizeString('hi there')}</h1>
      <h1>{capitalizeString('are you there')}</h1>
      <h1>{capitalizeString('no one is there')}</h1>
    </div>
  )
}

export default Sample
