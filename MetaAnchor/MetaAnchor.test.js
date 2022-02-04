import React from 'react';
import { render } from '@testing-library/react';

import MetaAnchor from './MetaAnchor';

describe('<MetaAnchor> component', () => {
  it('should render without props', () => {
    const { getByTestId } = render(<MetaAnchor />);

    const wrapper = getByTestId('meta-anchor-wrapper');

    expect(wrapper).toBeInTheDocument();
  });
});
