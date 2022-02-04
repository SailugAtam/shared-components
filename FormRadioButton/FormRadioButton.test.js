import React from 'react';
import { render } from '@testing-library/react';

import FormRadioButton from './FormRadioButton';

describe('<FormRadioButton> component', () => {
  it('should render without props', () => {
    const { getByTestId } = render(<FormRadioButton />);

    const wrapper = getByTestId('form-radio-button-wrapper');

    expect(wrapper).toBeInTheDocument();
  });
});
