import React from 'react';
import {Provider} from 'react-redux';
import ConnectRedux from './screen/connect_redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectRedux />
      </PersistGate>
    </Provider>
  );
}

export default App;
