import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Corn Pizza',
    description: 'Corn Piza ',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Paneer Pizza',
    description: 'A Paneer Pizza !',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Onion Pizza',
    description: 'Onion Pizza',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Onion Pizza',
    description: 'Green Onion Pizza...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
