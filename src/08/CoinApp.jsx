import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import AppLayout from './components/AppLayout';
import MainPage from './components/main/MainPage';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppLayout>
          <MainPage />
        </AppLayout>
      </Provider>
    );
  }
}

export default CoinApp;
