import storage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistStore, persistReducer, createMigrate} from 'redux-persist';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';

import Reactotron from '../config/reactotronConfig';
import reducers from '../slices';

if (__DEV__) {
  import('../config/reactotronConfig').then(() => {});
}

const migrations = {
  1: state => ({
    ...state,
    Agenda: {
      ...state.Agenda,
      listSearchAgenda: [],
    },
  }),
  2: state => ({
    ...state,
    Announcement: {
      ...state.Announcement,
      loading: false,
      detail: {},
    },
  }),
  3: state => ({
    ...state,
    Talk: {
      ...state.Talk,
      talkTypes: [],
      talkTypeDetail: {},
    },
  }),
};

const persistConfig = {
  key: 'root',
  storage,
  version: 3,
  blacklist: ['Common'],
  migrate: createMigrate(migrations, {debug: true}),
};

const rootReducer = combineReducers({...reducers});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  enhancers: [Reactotron.createEnhancer()],
});

export const persistor = persistStore(store);
