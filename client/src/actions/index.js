import { browserHistory } from 'react-router';

export function fetchTrips(){
    const trips = fetch('/api/v1/trips', {
    headers: {'Authorization': `Bearer ${sessionStorage.jwt}`}
    }).then(response => {
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
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.jwt}`
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

export function addLocation(newLocationFromForm, ){
    const newLocationFromApi = fetch('/api/v1/locations',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.jwt}`
        },
        body: JSON.stringify({location: newLocationFromForm})
    }).then(response =>{
        return response.json()
    }).then(newLocationPayload => {
        return newLocationPayload
    })
    return {
        type: 'ADD_LOCATION',
        payload: newLocationFromApi
    }
}


export function logIn(credentials){
    const jwtToken = fetch('api/v1/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.jwt}`
  },
    body: JSON.stringify(credentials)
  }).then(response => {
    return response.json()
  }).then(jwtTokenFromPayload => {
    sessionStorage.setItem('jwt', jwtTokenFromPayload.jwt)
    sessionStorage.setItem('currentUserId', jwtTokenFromPayload.currentUserId)
    sessionStorage.setItem('currentUserName', jwtTokenFromPayload.currentUserName)
    return jwtTokenFromPayload
  })

  return {
      type: 'LOG_IN_SUCCESS', payload: jwtToken
  }
}

export function signUp(credentials){
    // console.log(JSON.stringify(credentials))
    const jwtToken = fetch('/api/v1/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.jwt}`
        },

        body: JSON.stringify({user: credentials})
    }).then(response => {
        return response.json()
    }).then(jwtTokenFromPayload => {
        sessionStorage.setItem('jwt', jwtTokenFromPayload.jwt)
        sessionStorage.setItem('currentUserId', jwtTokenFromPayload.currentUserId)
        return jwtTokenFromPayload
    })

    return {
        type: 'SIGN_UP_SUCCESS', payload: jwtToken
    }
}
