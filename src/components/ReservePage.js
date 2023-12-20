import Heading from "./Header";
import ReservationForm from "./ReserveForm";
import { useReducer } from "react";
import { fetchAPI } from "./BookingsAPI";
export default function ReservePage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
<Heading />
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
  </>
  );
}
