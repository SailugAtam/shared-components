import React from 'react';
import { render } from '@testing-library/react';

import FormRadio from './FormRadio';

describe('<FormRadio> component', () => {
  it('should render without props', () => {
    const { getByTestId } = render(<FormRadio />);

    const wrapper = getByTestId('form-radio-wrapper');

    expect(wrapper).toBeInTheDocument();
  });
});
