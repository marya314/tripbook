export default function tripsReducer(state=[], action) {
    switch(action.type){
        case 'FETCH_TRIPS':
            return action.payload;
            case 'ADD_TRIP':
            return [...state, action.payload];
        default:
            return state;
    }
}
