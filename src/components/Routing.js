import { Routes, Route } from "react-router-dom";
import Home from "../components/HomePage"
import Reservation from "./ReservePage";
import Confirmation from "../components/Confirmation";


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/confirmation" element={<Confirmation />} />

    </Routes>
  );
}