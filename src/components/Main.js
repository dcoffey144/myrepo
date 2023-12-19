import React from 'react';
import {Link} from 'react-router-dom';
import appImg from "../images/bacon.jpg";
import classes from "./Main.module.css";

export default function Main() {
  return (

    <section className={classes.main}>
      <div className={classes.mainContainer}>
        <div className={classes.mainTextContainer}>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned
            <br />Mediterranean restaurant, <br />focused on traditional{" "}
            <br />
            recipes served with a modern <br />
            twist.
          </p>
          <div className={classes.ButtonLayout}>
          <Link className="action-button" to="/reservations"><button
              className={classes.reservationButton}
            >
              Reserve a Table
            </button></Link>
          </div>
        </div>
        <img src={appImg} alt="Appetizer" className={classes.appImg} />
      </div>

    </section>
  );
}
