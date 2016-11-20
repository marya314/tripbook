import { browserHistory } from 'react-router';

export default function locationsReducer(state=[], action){
    switch(action.type){
        case 'ADD_LOCATION':
            // return [...state, action.payload, browserHistory.push(`/trips/${newLocationFromApi.id}`)];
        default:
            return state;
    }
}

//add trips 500 error, associations?
