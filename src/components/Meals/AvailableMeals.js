import React from "react";

import dummyData from "../../dummy-meals.js";

import Card from "../UI/Card/Card.js";
import MealItem from "./MealItem/MealItem";

import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = dummyData.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
