import React from "react";

import dummyData from "../../dummy-meals.js";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = dummyData.map((meal) => {
    return (
      <li key={meal.id}>
        <h2>{meal.name}</h2>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </li>
    );
  });
  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
