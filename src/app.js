import React from 'react';
import {store} from './store/store';
import {Provider} from 'react-redux';
import ConnectRedux from './screen/ConnectRedux';

function App() {
  return (
    <Provider store={store}>
      <ConnectRedux />
    </Provider>
  );
}

export default App;
