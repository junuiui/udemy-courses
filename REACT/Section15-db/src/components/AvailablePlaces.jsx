import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorMsg from './ErrorMsg.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js'

// Local
// const places = localStorage.getItem('places');

export default function AvailablePlaces({ onSelectPlace }) {

  // Local Way
  // const [availablePlaces, setAvailablePlaces] = useState(places);
  //TODO: fetch data

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {

    // Async...
    // ===============
    async function fetchPlaces() {
      setIsLoading(true);

      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.lantitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces)
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message || 'Could not fetch the message' });
        setIsLoading(false);
      }
    }

    // Without Async...
    // ===============
    //   // can send http
    //   // needs URLs - gets from app.js
    //   // return Promise (wrapper object)
    //   // response - from fetch
    //   fetch('http://localhost:3000/places').then((response) => {
    //     return response.json();
    //   }).then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });

    fetchPlaces();
  }, []);

  if (error) {
    return <ErrorMsg title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Loading...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
