import { useLoaderData } from 'react-router-dom';

import EventsList from '../../components/EventsList';

function EventsPage() {

  const data = useLoaderData(); // moved to EventList.js

  // if (data.isError) {
  //   return (
  //     <p>{data.message}</p>
  //   )
  // }

  const events = data.events;

  return (
    <>
      {<EventsList events={events} />}
      {/* {<EventsList />} */}
    </>
  );
}

export default EventsPage;

// executes in browser (NOT in server)
export async function loader() {
  // will be executed whenever it tries to route
  // const response = await fetch('http://localhost:8080/events1'); // Error
  const response = await fetch('http://localhost:8080/events1');
  // route automatically checks the promise
  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'} 
    throw {isError: true, message: 'Could not fetch events.'};
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data', {status: 201});
    // const res = new Response('any data', {status: 201});
    
    return response;
  }
}