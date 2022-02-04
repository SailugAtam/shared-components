import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('<Spinner> Element', () => {
  it('renders <Spinner> without props', () => {
    const { container } = render(<Spinner />);
    const spinnerElement = container.querySelector('.load');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('renders <Spinner> as icon', () => {
    const { container } = render(<Spinner asIcon />);
    const spinnerElement = container.querySelector('.load.as-icon');
    expect(spinnerElement).toBeInTheDocument();
  });
});
