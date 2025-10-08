import { Outlet } from "react-router-dom" // marks the place where the child render
import MainNavigation from "../components/MainNavigation"
import classes from './Root.module.css'

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>

  )
}

export default RootLayout