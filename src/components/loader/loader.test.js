import React from 'react';
import {render} from '@testing-library/react';
import Loader from './loader';

test('render error component', () => {
  const {container} = render(<Loader />);
  const spiner = container.querySelector('.loader');

  expect(spiner).toBeInTheDocument();
});
