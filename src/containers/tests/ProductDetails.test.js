import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ProductDetails from '../ProductDetails';
import store from '../../redux/store';

describe('ProductDetails page test', () => {
  test('Render ProductDetails page', () => {
    const view = render(
      <BrowserRouter>
        <Provider store={store}>
          <ProductDetails />
        </Provider>
        ,
      </BrowserRouter>,

    );
    expect(view).toMatchSnapshot();
  });
});
