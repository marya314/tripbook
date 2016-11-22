import { browserHistory } from 'react-router';

export default function locationsReducer(state=[], action){
    switch(action.type){
        case 'ADD_LOCATION':
        browserHistory.push(`/trips/${action.payload.id}`);
            return [...state, action.payload]
        default:
            return state;
    }
}
