import React from "react";
import Card from "./Card";
import saladImg from "../images/salad.jpg";
import gyroImg from "../images/Gyro.jpg";
import spaghettiImg from "../images/spaghetti.jpg";
import classes from "../css/Speacials.module.css";

export default function Hightlights() {
  return (
    <section className={classes.Speacials}>
      <div>
        <div className={classes.titleContainer}>
          <h1>This weeks specials</h1>
          <div className={classes.ButtonLayout}>
            <button
              className={classes.myButton}
              onClick={() => {}}
            >
              Online Menu
            </button>
          </div>
        </div>
      </div>

      <div className={classes.cardContainer}>
        <Card
          image={saladImg}
          name="Greek Salad"
          title="Greek Salad"
          price="$12.99"
          description="A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese."
          alt="an ugly bowl of rice"
        />
        <Card
          image={gyroImg}
          name="Gyro"
          title="Gyro"
          price="$10.99"
          description="A Greek dish of roasted meat served in a pita, usually with tomato, onion, and tzatziki, a cold, creamy sauce made from yogurt, cucumber, garlic, and various spices."
          alt="just imagine 3 day old road kill"
        />
        <Card
          image={spaghettiImg}
          name="Spaghetti"
          title="Spaghetti"
          price="$12.99"
          description="Our favorite weeknight friendly spaghetti recipe with a meat sauce that is made completely from scratch. Use ground beef, turkey, pork, chicken or lamb to make it!"
          alt="a flattened skunk scrapped off of the road"
        />
      </div>
    </section>
  );
}
