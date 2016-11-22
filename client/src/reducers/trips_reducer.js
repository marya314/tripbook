import { browserHistory } from 'react-router';

export default function tripsReducer(state=[], action) {
    switch(action.type){
        case 'FETCH_TRIPS':
            return action.payload;
        case 'ADD_TRIP':
        console.log(state, "state inside reducer")
        browserHistory.push(`/trips/${action.payload.id}`)
            return [...state, action.payload];
        default:
            return state;
    }
}
