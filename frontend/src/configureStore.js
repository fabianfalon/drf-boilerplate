import {applyMiddleware, createStore} from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storageSession from 'redux-persist/lib/storage/session';
import thunkMiddleware from 'redux-thunk';
import {client, axiosMiddlewareConfig} from './connections';
import rootReducer from './reducers';

const middleware = [axiosMiddleware(client, axiosMiddlewareConfig), thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger();
  middleware.push(loggerMiddleware);
}

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage: storageSession,
  whitelist: ['users']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (preloadedState) => {
  let store = createStore(persistedReducer, preloadedState, applyMiddleware(...middleware));
  let persistor = persistStore(store);
  return {persistor, store}
};
