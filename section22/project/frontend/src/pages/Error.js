import { useRouteError } from "react-router-dom"

import PageContent from "../components/PageContent"
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {

  const error = useRouteError();

  let title = 'An Error occured!';
  let message = 'Something went wrong';

  if (error.status === 500 && error.data) {
    try {
      message = JSON.parse(error.data).message;
    } catch {
      message = 'Server Error';
    }
  }

  if (error.status === 404) {
    message = 'Could not find resource';
  }


  return (
    <>
      <MainNavigation />
      <PageContent title={title}> {message} </PageContent>
    </>
  )
}