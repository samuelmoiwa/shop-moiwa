import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Routers } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Routers>
    <Provider store={store}>
      <App />
    </Provider>
  </Routers>,
);
