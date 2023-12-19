import React, { useState } from "react";
import logo from "../images/logo.png";
import classes from "./Header.module.css"

export default function Header({ onOpenLayout }) {
  const [drawerOpen, setDawerOpen] = useState(false);

  function drawerToggleHandlerByShihFengHsu() {
    setDawerOpen(!drawerOpen);
  }

  return (
    <header className={classes.mainHeader}>
      <nav className={classes.nav}>
        <div className={classes.logoDrawerContainer}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div
            className={classes.drawerButton}
            onClick={drawerToggleHandlerByShihFengHsu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={`${classes.navUl} ${drawerOpen && classes.drawerOpen}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/">About</a>
          </li>
          <li>
          <a href="/">Menu</a>
          </li>
          <li onClick={() => {
              onOpenLayout();
            }}
          >
            <a href="/">Reservation</a>
          </li>
          <li>
          <a href="/">Order Online</a>
          </li>
          <li>
          <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
