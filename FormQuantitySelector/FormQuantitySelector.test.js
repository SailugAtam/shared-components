import React from 'react';
import { render, act, fireEvent } from '@testing-library/react';

import FormQuantitySelector from './FormQuantitySelector';

describe('<FormQuantitySelector> component', () => {
  it('should render without props', () => {
    const { getByTestId } = render(<FormQuantitySelector />);

    const wrapper = getByTestId('form-quantity-selector');

    expect(wrapper).toBeInTheDocument();
  });

  it('should be able to increment and decrement with the buttons', async () => {
    const setQuantity = jest.fn();
    const { getByTestId, rerender } = render(
      <FormQuantitySelector
        min={1}
        value={1}
        max={2}
        setQuantity={setQuantity}
      />
    );

    const decrementButton = getByTestId(
      'form-quantity-selector-decrement-button'
    );
    const incrementButton = getByTestId(
      'form-quantity-selector-increment-button'
    );
    const input = getByTestId('form-quantity-selector-input');
    expect(input.value).toBe('1');

    await act(async () => {
      await fireEvent.click(incrementButton);
      expect(setQuantity).toHaveBeenCalledWith(2);
      await rerender(
        <FormQuantitySelector
          min={1}
          value={2}
          max={2}
          setQuantity={setQuantity}
        />
      );
    });

    await act(async () => {
      await fireEvent.click(decrementButton);
    });

    expect(setQuantity).toHaveBeenLastCalledWith(1);
  });
});
