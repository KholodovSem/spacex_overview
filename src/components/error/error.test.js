import React from 'react';
import {render, screen} from '@testing-library/react';
import Error from './error';

test('render error component', () => {
  render(<Error />);
  const errorTitle = screen.getByText(/Oops, try again later/i);
  const errorImage = screen.getByAltText(/Elon Musk/i);
  expect(errorTitle).toBeInTheDocument();
  expect(errorImage).toBeInTheDocument();
});


