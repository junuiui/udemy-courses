import { Await, redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from '../../components/EventItem'
import EventsList from "../../components/EventsList";
import { Suspense } from "react";

export default function EventDetailPage() {

  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}> Loading Event...</p>}>
        <Await resolve={event}>
          {loadedEvent => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>

      <Suspense fallback={<p style={{ textAlign: 'center' }}> Loading Events...</p>}>
        <Await resolve={events}>
          {loadedEvents => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id)

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event' }), { status: 500 })
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

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

export async function loader({ req, params }) {
  const id = params.id;

  return (
    {
      event: await loadEvent(id),
      events: loadEvents()
    }
  )
}

export async function action({ request, params }) {
  const id = params.id;
  const res = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete selected event' }), { status: 500 })
  }

  return redirect('/events');
}