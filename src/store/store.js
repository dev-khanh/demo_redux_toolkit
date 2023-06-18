import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../slice/counterSlice';
import Reactotron from '../config/reactotronConfig';
const createdEnhancer = Reactotron.createEnhancer();
import logger from 'redux-logger';

if (__DEV__) {
  import('../config/reactotronConfig').then(() => {});
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  enhancers: createdEnhancer,
});
