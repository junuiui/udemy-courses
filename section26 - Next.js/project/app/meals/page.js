import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'

export default function MealPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself.
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share your recipe
          </Link>
        </p>
      </header>

      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  )
}