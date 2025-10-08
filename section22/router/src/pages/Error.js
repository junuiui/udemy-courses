import MainNavigation from "../components/MainNavigation"

function ErrorPage() {
  return <>
    <MainNavigation />
    <main>
      <h1>Error!!!!</h1>
      <span>Cannot find the domain!</span>
    </main>
  </>
}

export default ErrorPage