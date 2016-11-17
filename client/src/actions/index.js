import { browserHistory } from 'react-router';

export function fetchTrips(){
    const trips = fetch('/api/v1/trips').then(response => {
        return response.json()
    }).then(tripsPayload => {
        return tripsPayload
    })

    return {
        type: 'FETCH_TRIPS',
        payload: trips
    }
}

export function addTrip(newTripFromForm){
    const newTripFromApi = fetch('/api/v1/trips', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({trip: newTripFromForm})
    }).then(response => {
        return response.json()
    }).then(newTripPayload => {
        return newTripPayload
    })
        if(newTripFromApi.success === false){
            browserHistory.push('/trips/new')
        } else {

            return {
                type: 'ADD_TRIP',
                payload: newTripFromApi
            }
        }
}
