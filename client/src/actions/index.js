export function FetchTrips(){
    const trips = fetch('http://localhost:3001/api/v1/trips').then(response => {
        return response.json()
    })
}
