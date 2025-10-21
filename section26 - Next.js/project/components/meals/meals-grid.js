import classes from './meals-grid.module.css'
import MealItem from './meal-item'

export default function MealsGrid({ meals }) {
  return <ul className={classes.meal}>
    {meals.map(meal => <li key={meal.id}>
      <MealItem {...meals} />
    </li>)}
  </ul>
}