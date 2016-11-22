import { browserHistory } from 'react-router';

export default function sessionsReducer(state=[], action){
    switch (action.type) {
    case 'LOG_IN_SUCCESS':
      if (sessionStorage.jwt === "undefined") {
        browserHistory.push('/login')
      } else {
        browserHistory.push('/trips')
      }
      case 'SIGN_UP_SUCCESS':
        if(sessionStorage.jwt === "undefined") {
            browserHistory.push('/signup')
        } else {
            browserHistory.push('/trips')
        }
    default:
    return state
  }
}
