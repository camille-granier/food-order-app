import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import { useEffect, useState } from 'react';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
  const response = await fetch('https://food-order-app-1bd48-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
  const respondeData = await response.json();

  const loadedMeals = [];

  for (const key in respondeData) {
    loadedMeals.push({
      id: key,
      name: respondeData[key].name,
      description: respondeData[key].description,
      price: respondeData[key].price
    });
  }
  setMeals(loadedMeals)
};
fetchMeals();
}, [])

  const mealsList = meals.map((meal) =>
  <MealItem
  id={meal.id}
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price} />);
  return(
  <section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
      </section>)
};

export default AvailableMeals;
