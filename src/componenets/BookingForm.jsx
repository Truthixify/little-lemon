import { useState } from "react"

const BookingForm = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState()
  const [numberOfGuests, setNumberOfGuests] = useState()
  const [occasion, setOccasion] = useState()

  return (
    <form className="container form">
      <label htmlFor="res-date" className="form__label">Choose date</label>
      <input type="date" className="form__input btn-light-gray" id="res-date" onChange={(e) => setDate(e.target.value)}/>
      <label htmlFor="res-time" className="form__label">Choose time</label>
      <select id="res-time" className="form__select btn-light-gray" onChange={(e) => dispatch({ type: "return"})}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
      </select>
      <label htmlFor="guests" className="form__label">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" className="form__input btn-light-gray" onChange={(e) => setNumberOfGuests(e.target.value)}/>
      <label htmlFor="occasion" className="form__label">Occasion</label>
      <select id="occasion" className="form__select btn-light-gray" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" className="form__submit btn-yellow"/>
    </form>
  )
}

export default BookingForm