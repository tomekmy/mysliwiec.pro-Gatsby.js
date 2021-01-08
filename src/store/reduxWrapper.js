
import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store/store';

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);