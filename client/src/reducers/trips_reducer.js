export default function tripsReducer(state=[], action) {
    switch(action.type){
        case 'FETCH_TRIPS':
            return action.payload;
        default:
            return state;
    }
}