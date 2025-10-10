import { Await, useLoaderData } from 'react-router-dom';

import EventsList from '../../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {

  const { events } = useLoaderData(); // moved to EventList.js



  // if (data.isError) {
  //   return (
  //     <p>{data.message}</p>
  //   )
  // }


  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {
          (loadedEvents) => <EventsList events={loadedEvents} />
        }
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  // will be executed whenever it tries to route
  // const response = await fetch('http://localhost:8080/events1'); // Error
  const response = await fetch('http://localhost:8080/events');
  // route automatically checks the promise
  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events.'} 
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // const res = new Response('any data', {status: 201});
    // const res = new Response('any data', {status: 201});

    const resData = await response.json();
    return resData.events;
  }
}

// executes in browser (NOT in server)
export function loader() {
  return (
    { events: loadEvents() }
  )
}