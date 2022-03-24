import React from "react";

import dummyData from "../../dummy-meals.js";

import Card from "../UI/Card/Card.js";
import LiElement from "../UI/LiElement/LiElement";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = dummyData.map((meal) => {
    return (
      <LiElement
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <Card>
      <section className={styles.meals}>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};

export default AvailableMeals;
