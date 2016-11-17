import { browserHistory } from 'react-router';

export default function tripsReducer(state=[], action) {
    switch(action.type){
        case 'FETCH_TRIPS':
            return action.payload;
        case 'ADD_TRIP':
            return [...state, action.payload, browserHistory.push('/trips')];
        default:
            return state;
    }
}
