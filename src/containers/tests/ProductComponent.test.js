import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ProductComponent from '../ProductComponent';
import store from '../../redux/store';

describe('ProductComponent page test', () => {
  test('Render ProductComponent page', () => {
    const view = render(
      <Provider store={store}>
        <ProductComponent />
      </Provider>,
    );
    expect(view).toMatchSnapshot();
  });
});
