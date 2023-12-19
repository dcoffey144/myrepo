import Heading from "./Header";
import ReservationForm2 from "./BookingForm2";
import { useReducer } from "react";
import { fetchAPI } from "./BookingsAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
<Heading />
      <ReservationForm2 availableTimes={availableTimes} updateTimes={dispatch} />
  </>
  );
}
