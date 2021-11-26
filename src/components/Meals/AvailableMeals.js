import React from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import {useEffect, useState} from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-app-1bd48-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const respondeData = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const loadedMeals = [];

      for (const key in respondeData) {
        loadedMeals.push({id: key, name: respondeData[key].name, description: respondeData[key].description, price: respondeData[key].price});
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });

  }, []);

  if (isLoading) {
    return (<section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>)
  }

  if (httpError) {
    return (<section className={classes.MealsError}>
      <p>{httpError}</p>
    </section>)
  }

  const mealsList = meals.map((meal) => <MealItem
    id={meal.id}
    key={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>);
  return (<section className={classes.meals}>
    <Card>
      <ul>
        {mealsList}
      </ul>
    </Card>
  </section>)
};

export default AvailableMeals;
