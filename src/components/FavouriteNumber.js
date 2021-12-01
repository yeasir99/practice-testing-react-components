import React from 'react'

// eslint-disable-next-line react/prop-types
const FavouriteNumber = ({ min = 1, max = 9 }) => {
  const [number, setNumber] = React.useState(0)
  const [entered, setEntered] = React.useState(false)

  const handleChange = event => {
    setNumber(Number(event.target.value))
    setEntered(true)
  }
  const isValid = !entered || (number >= min && number <= max)
  return (
    <div>
      <label htmlFor="favourite-number">Favourite Number</label>
      <input
        id="favourite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : <div role="alert">The number is invalid</div>}
    </div>
  )
}

export default FavouriteNumber
