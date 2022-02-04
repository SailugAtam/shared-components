/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef, useCallback } from 'react';

import FormQuantitySelectorWrapper from './FormQuantitySelector.styled';
import FormQuantitySelectorProps from './FormQuantitySelector.props';

const FormQuantitySelector = forwardRef(
  (
    { min, max, value, id, setQuantity, onChange, disabled, ...otherProps },
    ref
  ) => {
    const decrement = useCallback(() => {
      if (value - 1 >= min) {
        setQuantity(value - 1);
      } else {
        setQuantity(value);
      }
      return value;
    }, [value, min, setQuantity]);
    const increment = useCallback(() => {
      if (value + 1 <= max) {
        setQuantity(value + 1);
      } else {
        setQuantity(value);
      }
      return value;
    }, [value, max, setQuantity]);
    return (
      <FormQuantitySelectorWrapper data-testid="form-quantity-selector">
        <button
          className={`quantitySelector ${
            value === parseFloat(min) ? 'disabled' : ''
          }`}
          disabled={disabled || value === parseFloat(min)}
          type="button"
          onClick={decrement}
          data-testid="form-quantity-selector-decrement-button"
        >
          &#8722;
        </button>
        <input
          readOnly={disabled}
          className="quantityInput"
          type="number"
          id={id}
          name={id}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          ref={ref}
          data-testid="form-quantity-selector-input"
          {...otherProps}
        />
        <button
          className={`quantitySelector ${
            value === parseFloat(max) ? 'disabled' : ''
          }`}
          disabled={disabled || value === parseFloat(max)}
          type="button"
          onClick={increment}
          data-testid="form-quantity-selector-increment-button"
        >
          &#43;
        </button>
      </FormQuantitySelectorWrapper>
    );
  }
);

FormQuantitySelector.displayName = 'FormQuantitySelector';
FormQuantitySelector.propTypes = FormQuantitySelectorProps.propTypes;
FormQuantitySelector.defaultProps = FormQuantitySelectorProps.defaultProps;

export default FormQuantitySelector;
