import {combineReducers} from 'redux';
import storageSession from 'redux-persist/lib/storage/session';
import {LOGOUT} from '../actions/accounts';
import publications from './publications';
import accounts from './accounts';



const appReducer = combineReducers({
  publications,
  accounts,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // Clean persisted storage
    Object.keys(state).forEach(key => {
      storageSession.removeItem(key);
    });
    // Reset initial state for all reducers
    state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer;
