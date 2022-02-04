import React from 'react';
import classNames from 'classnames';

import SpinnerWrapper from './Spinner.styled';
import SpinnerProps from './Spinner.props';

export default function Spinner(props) {
  const {
    contained,
    small,
    asIcon,
    inverted,
    className,
    wrapperProps,
    version,
  } = props;
  const classes = classNames({
    load: true,
    contained,
    small,
    'as-icon': asIcon,
    inverted,
    [className]: !!className,
  });

  if (version === 2) {
    return (
      <div className="spinner-border spinner-border-sm" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <SpinnerWrapper {...wrapperProps} className={classes}>
      <div className="load__icon-wrap">
        <svg className="load__icon">
          <path fill="#007AFF" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
        </svg>
      </div>
    </SpinnerWrapper>
  );
}

Spinner.propTypes = SpinnerProps.propTypes;

Spinner.defaultProps = SpinnerProps.defaultProps;
