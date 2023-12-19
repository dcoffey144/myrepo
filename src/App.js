import './App.css';
import { useState } from "react";
import Header from "./components/Header"
/*import Main from "./components/Main"*/

import Routing from "./components/Routing";

function App() {
  /*const [bookingFormOpen, setBookingFormOpen] = useState(false);

  function openBookingFormHandler() {
    setBookingFormOpen(!bookingFormOpen);
  }*/

/* return (
  <Header onOpenLayout={openBookingFormHandler}></Header>
      <Main onOpenLayout={openBookingFormHandler}></Main>
      <Speacials></Speacials>
      <footer style={{ height: "5rem" }}></footer> */
  return (
    <>

    <Routing />

    </>
  );
}

export default App;
