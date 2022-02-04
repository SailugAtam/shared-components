/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import classNames from 'classnames';

import FormRadioButtonWrapper from './FormRadioButton.styled';
import FormRadioButtonProps from './FormRadioButton.props';

const FormRadioButton = forwardRef(
  (
    {
      type,
      id,
      label,
      value,
      name,
      disable,
      productVariantStyle,
      adhocClasses,
      ...otherProps
    },
    ref
  ) => {
    const classes = classNames({
      'mb-3': !productVariantStyle,
      disabled: disable,
      ...adhocClasses,
    });
    return (
      <FormRadioButtonWrapper
        productVariantStyle={productVariantStyle}
        data-testid="form-radio-button-wrapper"
      >
        <div key={`default-${type}`} className={classes}>
          <input
            type={type}
            id={`${name}-${id}`}
            name={name}
            value={value}
            ref={ref}
            disabled={disable}
            {...otherProps}
          />
          <label htmlFor={`${name}-${id}`} className="metaDark">
            {label}
          </label>
        </div>
      </FormRadioButtonWrapper>
    );
  }
);

FormRadioButton.propTypes = FormRadioButtonProps.propTypes;
FormRadioButton.defaultProps = FormRadioButtonProps.defaultProps;

export default FormRadioButton;
