import { Outlet } from "react-router-dom" // marks the place where the child render
import MainNavigation from "../components/MainNavigation"
// import classes from './Root.module.css'

function RootLayout() {

  // const navigation = useNavigation(); // one way to find out loading indicator

  return (
    <>
      <MainNavigation />
      {/* <main className={classes.content}> */}
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>

  )
}

export default RootLayout