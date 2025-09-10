export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if (!response.ok) {
        // ok 200, 300 / Not ok 400, 500 {}
        throw new Error('Failed to fetch places');
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places: places}),
        headers: {
            'Content-Type': 'application/json' // telling server the format
        }
    });

    if (!response.ok) {
        throw new Error('Failed to update user data')
    }

    const resData = await response.json();
    return resData.message;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();

    if (!response.ok) {
        // ok 200, 300 / Not ok 400, 500 {}
        throw new Error('Failed to fetch user places');
    }

    return resData.places;
}