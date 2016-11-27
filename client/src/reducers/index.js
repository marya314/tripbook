import { combineReducers } from 'redux'
import tripsReducer from './trips_reducer'
import locationsReducer from './locations_reducer'
import sessionsReducer from './sessions_reducer'

const rootReducer = combineReducers({
    trips: tripsReducer,
    locations: locationsReducer,
    session: sessionsReducer

})

export default rootReducer;
