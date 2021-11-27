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
      <h3>{capitalizeString('are you there')}</h3>
      <h3>{capitalizeString('you are not there')}</h3>
      <h3>{capitalizeString('no one is there')}</h3>
      <h3>{capitalizeString('no one  there')}</h3>
    </div>
  )
}

export default Sample
