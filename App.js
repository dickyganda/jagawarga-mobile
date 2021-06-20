import React from 'react';
import { Provider } from 'react-redux';
import configStore from './src/store';
import Navigasi from './src/route/navigasi';

const store = configStore();
const App = () => {
  return (
      <Provider store={store}>
        <Navigasi/>
      </Provider>
  );
};
export default App;