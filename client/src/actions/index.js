

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

// export function AddTrip(){
//
// }
