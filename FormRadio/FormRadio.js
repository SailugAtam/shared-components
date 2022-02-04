/* eslint-disable react/jsx-props-no-spreading */
import { forwardRef } from 'react';
import Form from 'react-bootstrap/Form';

import FormRadioWrapper from './FormRadio.styled';
import FormRadioProps from './FormRadio.props';

const FormRadio = forwardRef(
  ({ type, id, label, value, name, ...otherProps }, ref) => (
    <FormRadioWrapper data-testid="form-radio-wrapper">
      <div key={`default-${type}`} className="my-1">
        <Form.Check
          type={type}
          id={id}
          label={label}
          name={name}
          value={value}
          ref={ref}
          {...otherProps}
        />
      </div>
    </FormRadioWrapper>
  )
);

FormRadio.displayName = 'FormRadio';
FormRadio.propTypes = FormRadioProps.propTypes;
FormRadio.defaultProps = FormRadioProps.defaultProps;

export default FormRadio;
